const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://nckbku0m91.execute-api.eu-central-1.amazonaws.com',
            changeOrigin: true
        })
    );
};
