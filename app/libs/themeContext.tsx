import { createContext, useEffect, useState } from 'react';
import type { Context, ReactNode } from 'react';
import { Theme } from '~/libs/const';

type Props = {
    children: ReactNode;
};

type ModeContext = {
    colorScheme: string;
    setcolorScheme: (colorScheme: string) => void;
};

export const setThemeCookie = (value: string) => {
    window.document.cookie = `color-scheme=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
};

export const ThemeContext: Context<ModeContext> = createContext({} as any);

export const ThemeProvider = ({ children }: Props) => {
    const [colorScheme, rawSetcolorScheme] = useState('');

    useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.classList.contains(Theme.dark) ? Theme.dark : Theme.light;
        rawSetcolorScheme(initialColorValue);
    }, []);

    const setcolorScheme = (value: string) => {
        const root = window.document.documentElement;

        // update React color-scheme state
        rawSetcolorScheme(value);

        // set cookie for server to retrieve later
        setThemeCookie(value);

        // update class on root element
        if (value === Theme.dark) {
            root.classList.replace(Theme.light, value);
        } else {
            root.classList.replace(Theme.dark, value);
        }
    };
    return <ThemeContext.Provider value={{ colorScheme, setcolorScheme }}>{children}</ThemeContext.Provider>;
};
