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
      if (action.payload.command === 'users') {
        let msg = JSON.stringify(action.payload.users)
        return {
          users: [...state.users, msg]
        }
      } else {
        return state
      }
    case close:
      return initialState

    default:
      return state
  }
}
