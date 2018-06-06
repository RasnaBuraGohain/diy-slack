import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { register } from 'store/user'

const RegisterFormView = ({ handleSubmit, error, invalid, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}

            <div>
                <label htmlFor="username">Username:</label>
                <Field name="username" component="input" type="text" />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <Field name="password" component="input" type="password" />
            </div>

            <button disabled={submitting} type="submit">
                Register
            </button>
        </form>
    )
}

const validate = ({ username, password }) => {
    const errors = {}
    if (!username) {
        errors.username = 'missing username'
    }
    if (!password) {
        errors.password = 'missing password'
    }
    return errors
}

const onSubmit = ({ username, password }, dispatch, props) => {
    return dispatch(register(username, password)).then(() => {
        if (props.onRegister) props.onRegister()
    }).catch(error => {
        throw new SubmissionError({
            '_error': error.response.data.error,
        })
    })
}

const RegisterForm = reduxForm({
    form: 'register',
    validate,
    onSubmit,

})(RegisterFormView)

export default RegisterForm