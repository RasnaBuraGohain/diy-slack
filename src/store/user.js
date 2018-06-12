import { message, open, close } from './websocket'

const initialState = {
  connected: false,
  name: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case open:
      return {
        connected: true,
        name: null,
      }
    case message:
      // check if the action.payload is 'name' command
      // and that there is no error
      if(
          action.payload === "name")
      break;
      else

      return {
        connected: true,
        name: action.payload.name,
      }
    case close:
      return initialState
    default:
      return state
  }
}
