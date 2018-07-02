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
            let userId = "New user id: " + action.payload.id;
            let nameId = action.payload.id.toString();
            return {
              ...state,
              received: [...state.received, userId],
              nameIds: [...state.nameIds, nameId]
            }
          case 'name':
            let newUser = action.payload.name + " is now online";
            return {
              ...state,
              received: [...state.received, newUser],
              users: [...state.users, action.payload.name]
            }
          case 'join':
            let channel = "Channel " + action.payload.channel;
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