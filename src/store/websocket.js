export const connect = 'WEBSOCKET_CONNECT'
export const disconnect = 'WEBSOCKET_DISCONNECT'
export const send = 'WEBSOCKET_SEND'

export const open = 'WEBSOCKET_OPEN'
export const close = 'WEBSOCKET_CLOSE'
export const message = 'WEBSOCKET_MESSAGE'

export const middleware = endpoint => store => {
  let websocket = null

  const init = () => {
    websocket = new WebSocket(endpoint)
    websocket.addEventListener('open', evt => {
      store.dispatch({ type: open })
    })

    websocket.addEventListener('close', evt => {
      websocket = null
      store.dispatch({ type: close })
    })

    websocket.addEventListener('message', evt => {
      store.dispatch({ type: message, payload: JSON.parse(evt.data) })
    })
  }

  init(endpoint)

  return next => action => {
    switch (action.type) {
      case connect:
        init(endpoint)
        break;

      case disconnect:
        websocket.close()
        break;

      case send:
        websocket.send(JSON.stringify(action.payload))
        break;

      default:
        break;
    }
    return next(action);
  }
}

const initialState = {
  connected: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case open:
      return { connected: true }
    case close:
      return { connected: false }
    default:
      return state;
  }
}
