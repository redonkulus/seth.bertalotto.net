import { useEffect } from 'react';

import type { ActionFunction, HeadersFunction, LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';

import { redirect } from '@remix-run/node';

import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useLocation,
} from '@remix-run/react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { META_NAME, META_POSITION, META_TITLE, Theme } from '~/libs/const';
import styles from '../build/tailwind.css';
import { ThemeProvider } from '~/libs/themeContext';
import { getTheme, themeCookie } from '~/libs/cookies';
import * as gtag from '~/libs/gtags.client';

const gaTrackingId = 'G-6MRPXX727F';
const GoogleAnalyticsScript = () => {
    return process.env.NODE_ENV === 'development' || !gaTrackingId ? null : (
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
            <script
                async
                id="gtag-init"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gaTrackingId}', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
    );
};

export const links: LinksFunction = () => {
    return [
        {
            as: 'font',
            crossOrigin: 'anonymous',
            rel: 'preload',
            href: '/fonts/GTWalsheimPro-Regular.woff2',
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

export const meta: MetaFunction = () => [
    {
        charset: 'utf-8',
    },
    {
        'fb:admins': '733151261',
    },
    { 'google-site-verification': '9b4WmUk8h_ZithBGF5LGtwnoOuSDHFPmPTCtBhD8EDA' },
    { property: 'og:title', content: META_NAME },
    { property: 'og:type', content: 'public_figure' },
    { property: 'og:url', content: 'https://seth.bertalotto.net' },
    { property: 'og:description', content: META_POSITION },
    { property: 'og:image', content: 'https://seth.bertalotto.net/images/me.png' },
    { property: 'og:site_name', content: META_NAME },
    { title: META_TITLE },
    { viewport: 'width=device-width,initial-scale=1' },
];

export const headers: HeadersFunction = () => ({
    'Accept-CH': 'Sec-CH-Prefers-Color-Scheme',
});

export const action: ActionFunction = async ({ request }) => {
    const theme = await getTheme(request);
    const newTheme = theme === Theme.light ? Theme.dark : Theme.light;
    return redirect(request.url, {
        headers: {
            'Set-Cookie': await themeCookie.serialize(newTheme, {
                expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            }),
        },
    });
};

export const loader: LoaderFunction = async ({ request }) => {
    return {
        theme: await getTheme(request),
    };
};

export default function App() {
    const location = useLocation();
    const { theme } = useLoaderData();

    useEffect(() => {
        if (gaTrackingId?.length) {
            gtag.pageview(location.pathname, gaTrackingId);
        }
    }, [location]);

    return (
        <ThemeProvider>
            <html lang="en" className={`antialiased ${theme}`}>
                <head>
                    <Meta />
                    <Links />
                </head>
                <body>
                    <GoogleAnalyticsScript />
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
