import { message, close } from './websocket'

const initialState = {
  channels: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case message:
      if (action.payload.command === "join") {
        return {
          channels: [
            ...state.channels,
            { join: action.payload.join, connected: true }
          ],
        }
      }

      return state

    case close:
      return initialState

    default:
      return state
  }
}
