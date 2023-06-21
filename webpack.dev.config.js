const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: {
            app: {
                name: 'chrome',
            }
        },
        hot: true,
        compress: true,
        port: 3000,
    }
};
