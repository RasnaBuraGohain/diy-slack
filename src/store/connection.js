import { open, message } from './websocket'

const initialState = {
  connected: false,
  received: [],
  id: null,
  name: '',
  users: [],
  nameIds: [],
  channels: [],
  currentUser: '',
  currentChannel: '',

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
        let msg = "Error: " + action.payload.info;
        return {
          ...state,
          received: [...state.received, msg]
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
              nameIds: [...state.nameIds, nameId]
            }
          case 'name':
            let username = action.payload.name;
            return {
              ...state,
              received: [...state.received, username],
              users: [...state.users, action.payload.name]
            }
          case 'join':
            let channel = action.payload.channel;
            return {
              ...state,
              received: [...state.received, channel],
              channels: [...state.channels, action.payload.channel]
            }
          case 'message':
            let newMsg = action.payload.message + " from " + action.payload.id;
            return {
              ...state,
              received: [...state.received, newMsg]
            }
          default:
            return state;
        }
      }
      break;
    default:
      return state;
  }
  return state;
}