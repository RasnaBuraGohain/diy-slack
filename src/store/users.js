import { message, open, close } from './websocket'

const initialState = {
  users: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case open:
      return { ...state }
    case message:
      return { users: [action.payload, ...state.users] }
    case close:
      return initialState
    default:
      return state
  }
}

