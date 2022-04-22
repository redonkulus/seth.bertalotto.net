import { useContext } from 'react';
import { ThemeContext } from '~/libs/themeContext';
import { Theme } from '~/libs/const';

const IconMoon = () => (
    <svg
        height="32px"
        viewBox="0 0 32 32"
        style={{ fill: 'rgb(33, 150, 243)', stroke: 'rgb(33, 150, 243)', strokeWidth: 0 }}
        width="32px"
    >
        <path d="M13 3c0-.327.017-.65.047-.97.052-.543-.38-1.022-.925-1.03H12C5.688 1 .62 6.315 1.022 12.713c.335 5.31 4.544 9.697 9.838 10.23 5.54.557 10.335-3 11.725-7.98.15-.533-.208-1.07-.75-1.18C16.796 12.78 13 8.334 13 3"></path>
    </svg>
);

const IconSun = () => (
    <svg fill="#fff" height="32px" viewBox="0 0 32 32" width="32px">
        <path d="M 15 3 L 15 8 L 17 8 L 17 3 Z M 7.5 6.09375 L 6.09375 7.5 L 9.625 11.0625 L 11.0625 9.625 Z M 24.5 6.09375 L 20.9375 9.625 L 22.375 11.0625 L 25.90625 7.5 Z M 16 9 C 12.144531 9 9 12.144531 9 16 C 9 19.855469 12.144531 23 16 23 C 19.855469 23 23 19.855469 23 16 C 23 12.144531 19.855469 9 16 9 Z M 16 11 C 18.773438 11 21 13.226563 21 16 C 21 18.773438 18.773438 21 16 21 C 13.226563 21 11 18.773438 11 16 C 11 13.226563 13.226563 11 16 11 Z M 3 15 L 3 17 L 8 17 L 8 15 Z M 24 15 L 24 17 L 29 17 L 29 15 Z M 9.625 20.9375 L 6.09375 24.5 L 7.5 25.90625 L 11.0625 22.375 Z M 22.375 20.9375 L 20.9375 22.375 L 24.5 25.90625 L 25.90625 24.5 Z M 15 24 L 15 29 L 17 29 L 17 24 Z" />
    </svg>
);

export default function ThemeToggle() {
    const { colorScheme, setcolorScheme } = useContext(ThemeContext);
    if (colorScheme === '') {
        return null;
    }
    return (
        <label className="cursor-pointer" title={`Toggle ${colorScheme} mode`}>
            <input
                className="hidden"
                type="checkbox"
                checked={colorScheme === Theme.dark}
                onChange={(ev) => {
                    setcolorScheme(ev.target.checked ? Theme.dark : Theme.light);
                }}
            />{' '}
            {colorScheme === Theme.dark ? <IconSun /> : <IconMoon />}
        </label>
    );
}
