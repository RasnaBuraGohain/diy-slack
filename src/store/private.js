import { message, close } from './websocket'

const initialState = {
  log: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case message:
      if (action.payload.command === "message") {
        return {
          log: [
            action.payload,
            ...state.log]
        }
      }
      return state
    case close:
      return initialState
    default:
      return state
  }
}
