import { message, open, close } from './websocket'

const initialState = {
  connected: false,
  name: null,
  channel: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case open:
      return {
        connected: true,
        name :null,
        channel: null,
      }
    case message:
      const command = action.payload
      if(command.error === "channel")
      break;
      else
      return {
        connected: true,
        name : action.payload.name,
        channel: action.payload.channelName
      }
    case close:
      return initialState
    default:
      return state
  }
}
