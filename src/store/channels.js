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
      if (action.payload.command === 'part') {
        return {
          channels: state.channels.map(channel => {
            return channel.join === action.payload.join
              ? { ...channel, connected: false }
              : channel
          }),
        }
      }
      return state

    case close:
      return initialState

    default:
      return state
  }
}