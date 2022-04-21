import { Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import Header from '~/components/header';
import Footer from '~/components/footer';
import type { MetaFunction } from 'remix';
import { META_NAME, META_POSITION, META_TITLE } from '~/libs/const';
import styles from '../build/tailwind.css';

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/images/favicon.ico',
            type: 'image/png',
        },
        {
            href: styles,
            rel: 'stylesheet',
        },
    ];
};

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    'fb:admins': '733151261',
    'google-site-verification': '9b4WmUk8h_ZithBGF5LGtwnoOuSDHFPmPTCtBhD8EDA',
    'og:title': META_NAME,
    'og:type': 'public_figure',
    'og:url': 'https://seth.bertalotto.net',
    'og:description': META_POSITION,
    'og:image': 'https://seth.bertalotto.net/images/me.png',
    'og:site_name': META_NAME,
    title: META_TITLE,
    viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === 'development' && <LiveReload />}
            </body>
        </html>
    );
}
