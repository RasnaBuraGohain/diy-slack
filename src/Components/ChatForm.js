import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { chat } from 'store/user'

const ChatFormView = ({ handleSubmit, error, invalid, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}

            <div>
                <label htmlFor="username">Username:</label>
                <Field name="username" component="input" type="text" />

            </div>

            <button disabled={submitting} type="submit">
                Start Chatting
            </button>
        </form>
    )
}

const validate = ({ username }) => {
    const errors = {}
    if (!username) {
        errors.username = 'missing username'
    }

    return errors
}

const onSubmit = ({ username }, dispatch, props) => {
    return dispatch(chat(username)).then(() => {
        if (props.onRegister) props.onRegister()
    }).catch(error => {
        throw new SubmissionError({
            '_error': error.response.data.error,
        })
    })
}

const ChatForm = reduxForm({
    form: 'chat',
    validate,
    onSubmit,

})(ChatFormView)

export default ChatForm
