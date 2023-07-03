import { useState } from 'react';
import { Link, useMatches } from '@remix-run/react';
import classnames from 'classnames';
import { META_NAME, META_POSITION } from '~/libs/const';
import ThemeToggle from '~/components/ThemeToggle';

const links = ['Code Journey', 'Experience', 'Open Source', 'Projects', 'Skills'];

const renderMenu = (routePath: string | undefined, setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    return links.map((link) => {
        const url = link.replace(' ', '-').toLocaleLowerCase();
        const classes = classnames('font-bold', {
            'lg:active': url === routePath,
        });
        return (
            <li key={link} className="mb-10 lg:mb-0">
                <Link to={url} className={classes} onClick={() => setOpen(false)}>
                    {link}
                </Link>
            </li>
        );
    });
};

const HamburgerIcon = () => (
    <svg width="32" height="32" viewBox="0 0 100 100">
        <path
            className="line line1 fill-[none] stroke-black dark:stroke-white stroke-[6]"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path className="line line2 fill-[none] stroke-black dark:stroke-white stroke-[6]" d="M 20,50 H 80" />
        <path
            className="line line3 fill-[none] stroke-black dark:stroke-white stroke-[6]"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
    </svg>
);

export default function Header() {
    const [isOpen, setOpen] = useState(false);
    const matches = useMatches();
    const currentRoute = matches?.pop();
    const routePath = currentRoute?.pathname.substring(1); // remove beginning slash
    const menuItems = renderMenu(routePath, setOpen);

    const buttonClass = isOpen ? 'open' : '';
    const buttonTitle = !isOpen ? 'Open navigation' : 'Close navigation';
    const menuClass = isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none';

    return (
        <header className="sticky top-0 lg:py-2 bg-white dark:bg-slate-800 z-10">
            <div className="flex m-auto lg:px-8 lg:max-w-7xl lg:items-center place-content-between">
                <div className="lg:text-center mb-4 lg:mb-0">
                    <h1 className="text-m">
                        <Link to="/" className="tracking-tight">
                            {META_NAME}
                        </Link>
                    </h1>
                    <p className="text-sm">{META_POSITION}</p>
                </div>

                {/* desktop nav */}
                <nav className="hidden lg:block lg:static lg:grow">
                    <ul className="lg:flex place-content-between lg:place-content-evenly">{menuItems}</ul>
                </nav>
                <ThemeToggle className="hidden lg:block" />

                {/* mobile nav */}
                <button
                    area-expanded={isOpen ? 'true' : 'false'}
                    aria-label={buttonTitle}
                    className={`lg:hidden absolute top-1 right-0 z-50 place-self-start text-4xl flex ${buttonClass}`}
                    onClick={() => (isOpen ? setOpen(false) : setOpen(true))}
                    title={buttonTitle}
                >
                    <HamburgerIcon />
                </button>
                <nav
                    className={`lg:hidden fixed inset-0 z-40 overflow-hidden bg-white/[0.85] backdrop-blur transition-opacity duration-350 dark:bg-gray-800/[0.85] ${menuClass}`}
                >
                    <ul className="m-10">{menuItems}</ul>
                    <ThemeToggle className="block m-10" />
                </nav>
            </div>
        </header>
    );
}
