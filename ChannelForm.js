import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { send } from 'store/websocket'

const ChannelForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Channel</label>
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
                <button type="submit">Channel</button>
            </div>
        </form>
    );
};

const validate = ({ channel }) => {
    const errors = {}
    if (channel === "") {
        errors.hannel = 'missing channel name'
    }
    return errors
}

const onSubmit = ({ channel }, dispatch) => {
    const command = {
        command: "channel",
        channel: channel,
    }
    dispatch({ type: send, payload: command + "#" })
}

export default reduxForm({
    form: 'channel',
    validate,
    onSubmit,
    initialValues: {
        channel: "#jobs",

    },
})(ChannelForm)
