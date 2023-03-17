const common = require('./webpack.config.common');

const config = {
  ...common,
  mode: 'production',
};

module.exports = config;
