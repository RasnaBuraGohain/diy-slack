import { open, close, message } from './websocket'
const initialState = {
  connected: false,
  loggedIn: false,
}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case open:
      return {
        ...state,
        connected: true
      }
    case message:
      if (!state.loggedIn && action.payload === "ok: login succesful") {
        return {
          ...state,
          loggedIn: true,
        }
      }

      return state
    case close:
      return initialState
    default:
      return state;
  }
}