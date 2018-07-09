import { createStore, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { combineReducers, install } from 'redux-loop'
import thunk from 'redux-thunk'
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as connectionReducer } from './connection'
import { middleware as websocketMiddleware } from './websocket'
import { reducer as messagesReducer } from './messages'
import { reducer as usersReducer } from './users'
import { reducer as channelsReducer } from './channels'
import { reducer as privateReducer } from './private'

const history = createBrowserHistory()

const reducer = combineReducers({
  router: routerReducer,
  form: formReducer,
  messages: messagesReducer,
  connection: connectionReducer,
  users: usersReducer,
  channels: channelsReducer,
  private: privateReducer,
})

const store = createStore(reducer, composeWithDevTools(
  install(),
  applyMiddleware(thunk,
    routerMiddleware(history),
    websocketMiddleware("ws://localhost:8085/api/stream")),
))

startListener(history, store)

export default store