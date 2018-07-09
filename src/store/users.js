import { message } from './websocket'
import { loop, Cmd } from 'redux-loop';
import { push } from 'redux-first-routing';

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
        return loop(
          state,
          Cmd.run(
            (dispatch) => { dispatch(("Users: " + action.payload)) },
            { args: [Cmd.dispatch] },
          )
        )
      }
      const newState = {
        connected: true,
        users: action.payload.users,
      }
      return loop(
        newState,
        Cmd.action(push('/home'))
      )

    default:
      return state
  }
}