/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
    // appDirectory: 'app',
    // assetsBuildDirectory: 'public/build',
    devServerPort: 8002,
    ignoredRouteFiles: ['.*'],
    // publicPath: '/build/',
    // When running locally in development mode, we use the built in remix
    // server. This does not understand the vercel lambda module format,
    // so we default back to the standard build output.
    server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
    // serverBuildDirectory: 'build',
    serverBuildTarget: 'vercel',
};
