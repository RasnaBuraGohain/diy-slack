import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as websocketReducer, middleware as websocketMiddleware } from './websocket'
import { reducer as messagesReducer } from './messages'

const history = createBrowserHistory()

const reducer = combineReducers({
  location: routerReducer,
  form: formReducer,
  websocket: websocketReducer,
  messages: messagesReducer,
})

const middleware = applyMiddleware(routerMiddleware(history), websocketMiddleware("ws://localhost:8085/api/stream"))

const store = createStore(reducer, composeWithDevTools(middleware))

startListener(history, store)

export default store