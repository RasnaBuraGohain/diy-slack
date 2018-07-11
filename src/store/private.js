import { message, close, send } from './websocket'

const initialState = {
  log: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case send:
      if (action.payload.command === "message") {
        return {
          log: [
            action.payload,
            ...state.log]
        }
      }
      return state
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
