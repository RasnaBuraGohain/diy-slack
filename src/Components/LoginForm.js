import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { login } from 'store/user'

const LoginFormView = ({ handleSubmit, error, invalid, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}

            <div>
                <label htmlFor="username">Username:</label>
                <Field name="username" component="input" type="text" />
            </div>

            <button disabled={submitting} type="submit">
                Login
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
    return dispatch(login(username)).then(() => {
        if (props.onLogin) props.onLogin()
    }).catch(error => {
        throw new SubmissionError({
            '_error': error.response.data.error,
        })
    })
}

const LoginForm = reduxForm({
    form: 'login',
    validate,
    onSubmit,
    initialValues: {
        username: "rasna",
    },
})(LoginFormView)

export default LoginForm