import { createCookie } from '@remix-run/node';
import { COOKIE_NAME, Theme } from '~/libs/const';

// Create a cookie to track color scheme state
export const themeCookie = createCookie(COOKIE_NAME);

// Helper function to get the value of the color scheme cookie
export const getThemeToken = async (request: Request) => await themeCookie.parse(request.headers.get('Cookie'));

export const getTheme = async (request: Request) => {
    // Manually selected theme
    const userSelectedTheme = await getThemeToken(request);

    // System preferred color scheme header
    const systemPreferredColorScheme = request.headers.get('Sec-CH-Prefers-Color-Scheme');

    // Return the manually selected theme or system preferred theme or default theme
    return userSelectedTheme ?? systemPreferredColorScheme ?? Theme.light;
};
