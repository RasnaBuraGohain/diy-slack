import { message, close } from './websocket'

const initialState = {
  users: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case message:
      if (action.payload.command === "connect") {
        return {
          users: [
            ...state.users,
            { id: action.payload.id, name: null, connected: true }
          ],
        }
      }

      if (action.payload.command === 'disconnect') {
        return {
          users: state.users.map(user => {
            return user.id === action.payload.id
              ? { ...user, connected: false }
              : user
          }),
        }
      }
      if (action.payload.command === 'name') {
        return {
          users: state.users.map(user => {
            return user.id === action.payload.id && user.name === action.payload.name
              ? { ...user, connected: true }
              : user
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