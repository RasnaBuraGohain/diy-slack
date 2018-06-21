import { message, open, close } from './websocket'

const initialState = {
  channel: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case open:
      return {
        channel: null,
      }
    case message:
      const command = action.payload
      if (command.error === "channel")
        break;
      else
        return {
          channel: action.payload.channel
        }
    case close:
      return initialState
    default:
      return state
  }
}
