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

        // update class on root element
        if (value === Theme.dark) {
            root.classList.replace(Theme.light, value);
        } else {
            root.classList.replace(Theme.dark, value);
        }
    };
    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
