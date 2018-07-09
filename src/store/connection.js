import { open, close, message, send } from './websocket'
import { loop, Cmd } from 'redux-loop';

const initialState = {
  connected: false,
  id: null,
  name: null,

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
        return loop(
          state,
          Cmd.run(
            (dispatch) => { dispatch("Error: " + action.payload) },
            { args: [Cmd.dispatch] },
          )
        )
      }

      if (action.payload.command === "id") {
        return {
          ...state,
          id: action.payload.id,
        }
      }
      if (action.payload.command === "name" && action.payload.id === state.id) {
        const newState = {
          ...state,
          name: action.payload.name,
        }

        const nextAction = { type: send, payload: { command: "users" } }

        return loop(
          newState,
          Cmd.action(nextAction)
        )
      }

      return state

    case close:
      return initialState
    default:
      return state;
  }
}