import { createAction, handleActions, combineActions } from 'redux-actions';
import axios from 'axios'

// user middleware

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

const registerStart = createAction('USER_REGISTER_START');
const registerSuccess = createAction('USER_REGISTER_SUCCESS');
const registerFail = createAction('USER_REGISTER_FAIL');

export const register = (username, password) => dispatch => {
    dispatch(registerStart())
    return axios.post('/api/register', { username, password }).then(response => {
        dispatch(registerSuccess(response.data.result))
    }).catch(e => {
        dispatch(registerFail())
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
    [combineActions(loginStart, registerStart)]: (state, action) => ({
        inProgress: true,
        loggedIn: false,
        profile: null,
    }),

    [deregisterStart]: (state, action) => ({
        inProgress: true,
        loggedIn: false,
        profile: state.profile,
    }),
    [combineActions(loginSuccess, registerSuccess)]: (state, action) => ({
        inProgress: false,
        loggedIn: true,
        profile: action.payload,
    }),
    [combineActions(loginFail, registerFail, logoutSuccess, deregisterSuccess, deregisterFail)]: (state, action) => ({
        inProgress: false,
        loggedIn: false,
        profile: null,
    }),
}, stateFromStorage())