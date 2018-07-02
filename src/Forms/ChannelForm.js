import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { send } from 'store/websocket'
import { push } from 'redux-first-routing';

const ChannelForm = props => {
    const { handleSubmit, channels, dispatch } = props;
    const list = channels.map((channel, idx) => (
        <li key={idx}>
            <button onClick={() => {
                dispatch(push("/channels"));
            }}>
                {channel}
            </button>
        </li >
    ));
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Channel</label>
                <li> {list} </li>
                <div>
                    <Field
                        name="channel"
                        component="input"
                        type="text"
                        placeholder="Channel"
                    />
                </div>
            </div>
            <div>
                <button type="submit">Join</button>
            </div>
        </form>
    );
};

const validate = ({ channel }) => {
    const errors = {}
    if (!channel || channel === '') {
        errors.channel = 'missing channel name'
    }
    return errors
}

const onSubmit = ({ channel }, dispatch) => {
    const command = JSON.stringify({
        command: "join",
        channel: '#' + channel,
    })
    dispatch({ type: send, payload: command })
}

export default reduxForm({
    form: 'channel',
    validate,
    onSubmit,
    initialValues: {
        channel: "jobs",

    },
})(ChannelForm)
