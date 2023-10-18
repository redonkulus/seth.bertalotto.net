/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
    ignoredRouteFiles: ['.*'],
    serverMainFields: ['main', 'module'],
    serverModuleFormat: 'cjs',
    serverPlatform: 'node',
    serverMinify: false,
};
