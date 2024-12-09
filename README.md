# seth.bertalotto.net

A simple profile site about me.

## Technology Used

- [Remix](https://remix.run/docs) - Experimenting with Remix for building a simple React based app
- [TypeScript](https://www.typescriptlang.org/) - For solid Type support
- [TailwindCSS](https://tailwindcss.com/) - Robust Atomic CSS framework

## Development

```sh
npm run dev
```

This starts the app in development mode, rebuilding assets on file changes.

## Technical

### Dark Mode

Users can trigger dark mode by clicking on the toggle button. If they do not set it explicitly,
then I check the `prefers-color-scheme` browser API and set a cookie based on their preference.

On subsequent requests, the server will read this value from the cookie and automatically adjust
the scheme based on the users preference. The user can always overwrite this by clicking on the toggle
button, which saves their preference in the same cookie.
