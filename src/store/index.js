import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'
import { reducer as userReducer, userMiddleware } from './user'
import { composeWithDevTools } from 'redux-devtools-extension';

const history = createBrowserHistory()

const reducer = combineReducers({
  location: routerReducer,
  user: userReducer,
  form: formReducer,

})

const middleware = applyMiddleware(routerMiddleware(history), userMiddleware)

const store = createStore(reducer, composeWithDevTools(middleware))


startListener(history, store)

export default store