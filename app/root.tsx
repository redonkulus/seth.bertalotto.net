import { useEffect } from 'react';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'remix';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import type { LinksFunction, MetaFunction } from 'remix';
import { META_NAME, META_POSITION, META_TITLE, Theme } from '~/libs/const';
import styles from '../build/tailwind.css';
import { getCookieTheme, setCookieTheme, ThemeProvider } from '~/libs/themeContext';

export const links: LinksFunction = () => {
    return [
        {
            rel: 'preload',
            href: 'https://d3requdwnyz98t.cloudfront.net/assets/GTWalsheimPro/GTWalsheimPro-Regular-ba8d1cf5a1ba4e30f43beb5dfa124156c2e3eb639b5f937f19b5029a1c4b2bac.woff2',
        },
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

export async function loader({ request }: any) {
    const cookie = request.headers.get('Cookie');
    return getCookieTheme(cookie);
}

export default function App() {
    const { theme } = useLoaderData();
    useEffect(() => {
        // If the user has not explicitly chosen a color mode, set it based off of "prefers-color-scheme"
        // on subsequent requests their perferred scheme will be chosen
        // once browsers implemented color-scheme hints, we can remove this logic
        if (!theme) {
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            if (typeof mql.matches === 'boolean') {
                const theme = mql.matches ? Theme.dark : Theme.light;
                setCookieTheme(theme);
            }
        }
    }, [theme]);
    return (
        <ThemeProvider>
            <html lang="en" className={`antialiased ${theme}`}>
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
        </ThemeProvider>
    );
}
