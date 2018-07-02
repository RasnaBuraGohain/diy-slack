import { open, close, message } from './websocket'

const initialState = {
  connected: false,
  received: [],
  id: null,
  name: '',
  nameIds: [],
  users: [],
  channels: [],

}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case open:
      return {
        ...state,
        connected: true,
      }

    case message:
      if (action.payload.error === true) {
        return {
          ...state,
          received: [...state.received, action.payload.info]
        }
      }

      if (action.payload.command) {
        switch (action.payload.command) {
          case 'connect':
            let userId = action.payload.id;
            let nameId = action.payload.id.toString();
            return {
              ...state,
              received: [...state.received, userId],
              nameIds: [...state.usernameIds, nameId]
            };
          case 'name':
            const newName = action.payload.name;
            return {
              ...state,
              received: [...state.received, newName],
              users: [...state.users, action.payload.name]
            }
          case 'join':
            const channel = action.payload.channel;
            return {
              ...state,
              received: [...state.received, channel],
              channels: [...state.channels, action.payload.channel]
            }
          case 'message':
            const newMsg = action.payload.message + " from " + action.payload.id;
            return {
              ...state,
              received: [...state.received, newMsg]
            }
          default:
            return state
        }
      }
      return state
    case close:
      return initialState

    default:
      return state;
  }
}