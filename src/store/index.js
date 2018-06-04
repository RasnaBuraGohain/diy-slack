import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener } from 'redux-first-routing'

const history = createBrowserHistory()

const reducer = combineReducers({
  router: routerReducer,
})

const middleware = routerMiddleware(history)

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(middleware),
  // other store enhancers if any
));

startListener(history, store)

export default store