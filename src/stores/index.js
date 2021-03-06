import { createStore, applyMiddleware, compose  } from 'redux'
import reducers  from '../reducers'
import reduxReset from 'redux-reset'

module.exports = function(initialState) {

  const store = createStore(reducers, initialState, compose(
      applyMiddleware(),
      reduxReset(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
