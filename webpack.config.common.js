const path = require('path');

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        utils: './utils/index.ts',
        hooks: './hooks/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'src/[name]/index.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js|tsx|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
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
