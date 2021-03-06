import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';
var inject = require('./reconnect');

const store = configureStore();

let config = require('config');

console.log(JSON.stringify(config.default));
let wsConnectString = (config.default.clusterManager != undefined) 
? config.default.clusterManager.protocol
 + '://'+config.default.clusterManager.host
 + ':'+config.default.clusterManager.port
 + config.default.clusterManager.path : `ws://${location.hostname}:${location.port}/feed`


var reconnect = inject(function (wsConnectString) {
  // arguments are what you passed to .connect
  // this is the reconnect instance
  console.log(wsConnectString);
  return new WebSocket(wsConnectString);
});

var re = reconnect({
  // all options are optional
  initialDelay: 100,
  maxDelay: 60000,
  type: 'fibonacci',      // available: fibonacci, exponential
  failAfter: Infinity,
  randomisationFactor: 0,
  immediate: false
}, function (event) {
  console.log(event);
  store.dispatch(JSON.parse(event.data));
}, wsConnectString)

re.on('open', (event) => {
  console.log('reset state');
  store.dispatch({type: 'RESET'});
});

// var ws = new WebSocket(wsConnectString);
// ws.onmessage = function(event) {
//   console.log(event);
//   store.dispatch(JSON.parse(event.data));
// }

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
