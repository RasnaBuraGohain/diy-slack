import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'
import { reducer as userReducer, userMiddleware } from './user'
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as websocketReducer, middleware as websocketMiddleware } from './websocket'
import { reducer as messagesReducer } from './messages'

const history = createBrowserHistory()

const reducer = combineReducers({
  location: routerReducer,
  user: userReducer,
  form: formReducer,
  websocket: websocketReducer,
  messages: messagesReducer,
})

const middleware = applyMiddleware(routerMiddleware(history), userMiddleware, websocketMiddleware("ws://localhost:8085/api/stream"))

const store = createStore(reducer, composeWithDevTools(middleware))


startListener(history, store)

export default store