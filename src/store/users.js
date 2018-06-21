import { message, open, close } from './websocket'

const initialState = {
  users: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case open:
      return {
        users: ['Online'],
      }
    case message:
      return {
        users: [...state.users, action.payload],
      }
    case close:
      return initialState
    default:
      return state
  }
}
