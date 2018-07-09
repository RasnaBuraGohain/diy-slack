import { message } from './websocket'
import { loop, Cmd } from 'redux-loop';

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
              ? { ...user, name: state.name, connected: false }
              : user
          }),
        }
      }
      if (action.payload.command === 'name') {
        return {
          users: state.users.map(user => {
            return user.id === action.payload.id
              ? { ...user, name: action.payload.name }
              : user
          }),
        }
      }

      if (action.payload.command === 'users') {
        console.log(12345, action.payload.users)
        return state
        /*{
          users: action.payload.users.map(user => ({
            id: user.id,
            name: user.name,
            connected: true,
          }))
        }*/
      }

      return state
    default:
      return state
  }
}