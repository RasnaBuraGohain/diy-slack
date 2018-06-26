import { open, close, message } from './websocket'

const initialState = {
  connected: false,
  id: null,
  name: null,
  users: null,

}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case open:
      return {
        ...state,
        connected: true,
      }
    case message:
      if (action.error) {
        return state
      }

      if (action.payload.command === "id") {
        return {
          ...state,
          id: action.payload.id,
        }
      }
      if (action.payload.command === "name") {
        return {
          ...state,
          name: action.payload.name,
        }
      }
      if (action.payload.command === "users") {
        return {
          ...state,
          users: action.payload.users,
        }
      }
      return state

    case close:
      return initialState
    default:
      return state;
  }
}