import { createAction, handleActions, combineActions } from 'redux-actions';
import axios from 'axios'

const channelStart = createAction('CHANNEL_CHANNEL_START');
const channelSuccess = createAction('CHANNEL_CHANNEL_SUCCESS');
const channelFail = createAction('CHANNEL_CHANNEL_FAIL');

export const channel = (channel) => dispatch => {
    dispatch(channelStart())
    return axios.post('/api/channel', { channel }).then(response => {
        dispatch(channelSuccess(response.data.result))
    }).catch(e => {
        dispatch(channelFail())
        throw e
    })
}

const initialState = {
    inProgress: true,

}

export const reducer = handleActions({
    [channelStart]: (state, action) => ({
        ...state,
        inProgress: true,
    }),

    [combineActions(channelSuccess)]: (state, action) => ({
        inProgress: false,

    }),

}, initialState)