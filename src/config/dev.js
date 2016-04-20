'use strict';

import baseConfig from './base';

let config = {
  appEnv: 'dev',
  clusterManager: {
    protocol:'ws',
    host:'localhost',
    port: 8080,
    path: '/feed'
  }
};

export default Object.freeze(Object.assign({}, baseConfig, config));
