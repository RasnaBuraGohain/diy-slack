import { open, close, message } from './websocket'
const initialState = {
  connected: false,
  id: null,
  name: null,
  channel: null,
}
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case open:
      return {
        ...state,
        connected: true,
      }
    case message:
    if (state.id ) {
      return {
        ...state,
        name: action.payload.name,
      }
    }
    if (state.name) {
      return {
        ...state,
        channel: [action.payload, ...state.channel]
      }
    }
    return state
    case close:
      return initialState
    default:
      return state;
  }
}