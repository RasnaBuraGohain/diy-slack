import React from 'react'
import { Field, reduxForm } from 'redux-form'
//import { channel } from 'store/channel'

const TextField = ({ meta, input, ...props }) => {
    return (
        <div>
            {meta.invalid ? meta.error : null}
            <input {...input} {...props} />
        </div>)

}

const ChannelFormView = ({ handleSubmit, error, invalid, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}

            <div>
                <label htmlFor="channel">Channel :</label>
                <Field name="channel" component={TextField} type="text" />
            </div>
            <div>
                <button disabled={submitting} type="submit">
                    SUBMIT
              </button>
            </div>
        </form>
    )
}
const validate = ({ channel }) => {
    const errors = {}
    if (!channel) {
        errors.channel = 'missing channel name'
    }
    return errors
}
const onSubmit = ({ channel }, dispatch, props) => {
    return dispatch(channel)
}
const ChannelForm = reduxForm({
    form: 'channel',
    validate,
    onSubmit,
    initialValues: {
        channel: "#jobs",
    },
})(ChannelFormView)

export default ChannelForm