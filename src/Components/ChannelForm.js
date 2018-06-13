import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { send } from 'store/websocket'

const TextField = ({ meta, input, ...props }) => {
    return (
        <div>
            {meta.invalid ? meta.error : null}
            <input {...input} {...props} />
        </div>)

}

const ChannelFormView = ({ handleSubmit, error, validate, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}

            <div>
                <label htmlFor="channelName">Create a Channel :</label>
                <Field name="channelName" component={TextField} type="text" placeholder="Channel Name" />
            </div>
            <div>
                <button disabled={submitting} type="submit">
                    SUBMIT
              </button>
            </div>
        </form>
    )
}
const validate = ({ channelName }) => {
    const errors = {}
    if (channelName === "") {
        errors.channelName = 'missing channel name'
    }
    return errors
}
const onSubmit = ({ channelName }, dispatch, props) => {
    const command = {
        command: "channel",
        channel: channelName,
    }

    dispatch({ type: send, payload: command })
    return this.props.channelName
}
const ChannelForm = reduxForm({
    form: 'channel',
    validate,
    onSubmit,
    initialValues: {
        channelName: "#jobs",
    },
})(ChannelFormView)

export default ChannelForm