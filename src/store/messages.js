import { message, send } from './websocket'

const initialState = {
  log: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case send:
    case message:
      return { log: [action.payload, ...state.log] }
    default:
      return state
  }
}
