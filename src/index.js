import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';


const store = configureStore();

let config = require('config');

console.log(JSON.stringify(config.default));
let wsConnectString = config.default.clusterManager.protocol
 + '://'+config.default.clusterManager.host
 + ':'+config.default.clusterManager.port
 + config.default.clusterManager.path;

var ws = new WebSocket(wsConnectString);
ws.onmessage = function(event) {
  console.log(event);
  store.dispatch(JSON.parse(event.data));
}



//const socket = io({path:'/feed',transports: ['websocket']})
// socket.on('news', news =>
//   console.log(JSON.stringify(news))
// );
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
