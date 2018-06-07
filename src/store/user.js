import { createAction, handleActions, combineActions } from 'redux-actions';
import axios from 'axios'

export const userMiddleware = store => next => action => {
    if (action.type.substr(0, 5) === 'USER_') {
        const res = next(action)
        stateToStorage(store.getState().user)
        return res
    }
    return next(action)
}

const stateFromStorage = () => {
    const stateData = sessionStorage.getItem('USER_STATE')
    if (!stateData) {
        return initialState
    }

    try {
        return JSON.parse(stateData)
    } catch (e) {
        sessionStorage.removeItem('state')
        return initialState
    }
}

const stateToStorage = (state) => {
    sessionStorage.setItem('USER_STATE', JSON.stringify(state))
}

const loginStart = createAction('USER_LOGIN_START');
const loginSuccess = createAction('USER_LOGIN_SUCCESS');
const loginFail = createAction('USER_LOGIN_FAIL');

export const login = (username, password) => dispatch => {
    dispatch(loginStart())
    return axios.post('/api/login', { username, password }).then(response => {
        dispatch(loginSuccess(response.data.result))
    }).catch(e => {
        dispatch(loginFail())
        throw e
    })
}

const chatStart = createAction('USER_CHAT_START');
const chatSuccess = createAction('USER_CHAT_SUCCESS');
const chatFail = createAction('USER_CHAT_FAIL');

export const chat = (username) => dispatch => {
    dispatch(chatStart())
    return axios.post('/api/chat', { username }).then(response => {
        dispatch(chatSuccess(response.data.result))
    }).catch(e => {
        dispatch(chatFail())
        throw e
    })
}

const deregisterStart = createAction('USER_DEREGISTER_START');
const deregisterSuccess = createAction('USER_DEREGISTER_SUCCESS');
const deregisterFail = createAction('USER_DEREGISTER_FAIL');

export const deregister = (password) => (dispatch, getState) => {
    dispatch(deregisterStart())
    const state = getState()
    return axios.post('/api/deregister', { username: state.user.profile.username, password }).then(response => {
        dispatch(deregisterSuccess())
    }).catch(e => {
        dispatch(deregisterFail())
        throw e
    })
}

const logoutSuccess = createAction('USER_LOGOUT_SUCCESS');

export const logout = () => dispatch => {
    dispatch(logoutSuccess())
    return axios.post('/api/logout')
}

const initialState = {
    inProgress: false,
    loggedIn: false,
    profile: null,
}

export const reducer = handleActions({
    [combineActions(loginStart, chatStart)]: (state, action) => ({
        inProgress: true,
        loggedIn: false,
        profile: null,
    }),

    [deregisterStart]: (state, action) => ({
        inProgress: true,
        loggedIn: false,
        profile: state.profile,
    }),
    [combineActions(loginSuccess, chatSuccess)]: (state, action) => ({
        inProgress: false,
        loggedIn: true,
        profile: action.payload,
    }),
    [combineActions(loginFail, chatFail, logoutSuccess, deregisterSuccess, deregisterFail)]: (state, action) => ({
        inProgress: false,
        loggedIn: false,
        profile: null,
    }),
}, stateFromStorage())