var backoff = require('backoff')
var EventEmitter = require('events').EventEmitter
module.exports =
function (createConnection) {
  return function (opts, onMessage, connectionArgs) {
    opts = 'object' == typeof opts ? opts : {initialDelay: 1e3, maxDelay: 30e3}
    let connect = (connectionArgs) => {   
      let ws = createConnection(connectionArgs);
      ws.onmessage = (event) => onMessage(event)
      ws.onclose = (event) => {
        console.log('socket closed');
        connect(connectionArgs);
      }
    }
    connect(connectionArgs)
  }
}