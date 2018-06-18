import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as connectionReducer } from './connection'
import { middleware as websocketMiddleware } from './websocket'
import { reducer as messagesReducer } from './messages'
import { reducer as userReducer } from './user'

const history = createBrowserHistory()

const reducer = combineReducers({
  router: routerReducer,
  form: formReducer,
  messages: messagesReducer,
  user: userReducer,
  connection: connectionReducer,
})

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
    websocketMiddleware("ws://localhost:8085/api/stream")),
))

startListener(history, store)

export default store