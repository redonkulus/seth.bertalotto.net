import { Link } from 'remix';
import { useMatches } from '@remix-run/react';
import classnames from 'classnames';
import { META_NAME, META_POSITION } from '~/libs/const';

const links = ['Code Journey', 'Experience', 'Open Source', 'Projects', 'Skills'];

export default function Header() {
    const matches = useMatches();
    const currentRoute = matches?.pop();
    const routePath = currentRoute?.pathname.substring(1); // remove beginning slash

    return (
        <header className="sticky top-0 py-2 bg-white dark:bg-slate-800 z-10">
            <div className="lg:flex m-auto lg:px-8 lg:max-w-7xl items-baseline">
                <div className="lg:text-center mb-4 lg:mb-0">
                    <h1>
                        <Link to="/" className="tracking-tight">
                            {META_NAME}
                        </Link>
                    </h1>
                    <p className="text-sm">{META_POSITION}</p>
                </div>
                <nav className="grow">
                    <ul className="flex place-content-between lg:place-content-evenly">
                        {links.map((link) => {
                            const url = link.replace(' ', '-').toLocaleLowerCase();
                            const classes = classnames('font-bold', {
                                active: url === routePath,
                            });
                            return (
                                <li key={link}>
                                    <Link to={url} className={classes}>
                                        {link}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
