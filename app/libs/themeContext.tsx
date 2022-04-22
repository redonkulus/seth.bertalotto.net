import { createContext, useEffect, useState } from 'react';
import type { Context, ReactNode } from 'react';
import { Theme } from '~/libs/const';

type Props = {
    children: ReactNode;
};

type ModeContext = {
    theme: string;
    setTheme: (theme: string) => void;
};

const COOKIE_NAME = 'theme';

export const getCookieTheme = (cookie: string) => {
    if (cookie) {
        const cookieParts = cookie.split(';');
        for (let cookiePair of cookieParts) {
            const [name, value] = cookiePair.split('=');
            if (name?.trim() === COOKIE_NAME && value) {
                return {
                    theme: value,
                };
            }
        }
    }
    return {};
};

export const setCookieTheme = (value: string) => {
    window.document.cookie = `${COOKIE_NAME}=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
};

export const ThemeContext: Context<ModeContext> = createContext({} as any);

export const ThemeProvider = ({ children }: Props) => {
    const [theme, rawSetTheme] = useState('');

    useEffect(() => {
        const root = window.document.documentElement;
        const initialThemeValue = root.classList.contains(Theme.dark) ? Theme.dark : Theme.light;
        rawSetTheme(initialThemeValue);
    }, []);

    const setTheme = (value: string) => {
        const root = window.document.documentElement;

        // update React theme state
        rawSetTheme(value);

        // set cookie for server to retrieve later
        setCookieTheme(value);

        // update class on root element
        if (value === Theme.dark) {
            root.classList.replace(Theme.light, value);
        } else {
            root.classList.replace(Theme.dark, value);
        }
    };
    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
