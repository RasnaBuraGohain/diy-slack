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
        connected: true,
      }
    case message:
      if (action.error) {
        return state
      }

      if (action.payload.command === "id") {
        return {
          ...state,
          id: action.payload.id,
        }
      }

      return state

    case close:
      return initialState
    default:
      return state;
  }
}