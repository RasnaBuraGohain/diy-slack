<<<<<<< HEAD
import { message, close } from './websocket'
=======
import { message, open, close } from './websocket'
>>>>>>> 96352aa99a28a5e9f31c13649f5710759f4aaddd

const initialState = {
  users: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
<<<<<<< HEAD
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

        /*
              state.users.filter(user => {
                return user.id === action.payload.id
              }),
        */

        return {
          users: state.users.map(user => {
            return user.id === action.payload.id
              ? { ...user, connected: false }
              : user
          }),
        }
      }

      /*      if (... == disconnect)
              ... map over the users, and if the user has the correct id, return a disconnected user
      
            if (... == name)
            ... map over the users, and if the user has the correct id, return a  user with an updated name
      */

      return state

    case close:
      return initialState

=======
    case open:
      return { ...state }
    case message:
      return { users: [action.payload, ...state.users] }
    case close:
      return initialState
>>>>>>> 96352aa99a28a5e9f31c13649f5710759f4aaddd
    default:
      return state
  }
}
<<<<<<< HEAD
=======

>>>>>>> 96352aa99a28a5e9f31c13649f5710759f4aaddd
