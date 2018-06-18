import { open, close, message } from './websocket'
const initialState = {
  connected: false,
  id: null,
  name: null,
}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case open:
      return {
        ...state,
        connected: true
      }
    case message:
      if (!state.id && action.payload === "ok: login succesful") {
        return {
          ...state,
          id: true,
        }
      }

      return state
    case close:
      return initialState
    default:
      return state;
  }
}