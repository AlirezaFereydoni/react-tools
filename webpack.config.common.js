const path = require('path');

const config = {
    entry: {
        utils: {
            import: __dirname + '/src/utils/index.ts',
        },
        hooks: {
            import: __dirname + '/src/hooks/index.ts',
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: ['ts-loader'],
            },
        ],
    },
    externals: ['react', 'react-dom'],
    resolve: {
        alias: {
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
};

module.exports = config;
