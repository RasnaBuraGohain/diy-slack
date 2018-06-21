import { open, close, message } from './websocket'

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
<<<<<<< HEAD
      if (action.error) {
        return state
      }

      if (action.payload.command === "id") {
        return {
          ...state,
          id: action.payload.id,
=======
      if (state.id) {
        return {
          ...state,
          name: action.payload.name,
>>>>>>> 96352aa99a28a5e9f31c13649f5710759f4aaddd
        }
      }

      return state
<<<<<<< HEAD

=======
>>>>>>> 96352aa99a28a5e9f31c13649f5710759f4aaddd
    case close:
      return initialState
    default:
      return state;
  }
}