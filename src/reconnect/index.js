var backoff = require('backoff')
var EventEmitter = require('events').EventEmitter
module.exports =
function (createConnection) {
  return function (opts, onMessage, connectionArgs) {
    opts = 'object' == typeof opts ? opts : {initialDelay: 1e3, maxDelay: 30e3}
    let emitter = new EventEmitter()
    emitter.connected = false
    emitter.reconnect = true
    let connect = (connectionArgs) => {   
      let ws = createConnection(connectionArgs);
      ws.onmessage = (event) => onMessage(event)
      ws.onclose = (event) => {
        console.log('socket closed');
        connect(connectionArgs);
      }
      ws.onopen = (event) => {
        emitter.emit('open',event);
      }
    }
    connect(connectionArgs)
    return emitter;
  }
}