import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { deregister } from 'store/user'

const DeregisterFormView = ({ handleSubmit, error, invalid, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}

            <div>
                <label htmlFor="password">Password:</label>
                <Field name="password" component="input" type="password" />
            </div>

            <button disabled={submitting} type="submit">
                Delete your account
            </button>
        </form>
    )
}

const validate = ({ password }) => {
    const errors = {}
    if (!password) {
        errors.password = 'missing password'
    }
    return errors
}

const onSubmit = ({ password }, dispatch, props) => {
    return dispatch(deregister(password)).then(() => {
        if (props.ondelete) props.ondelete()
    }).catch(error => {
        throw new SubmissionError({
            '_error': error.response.data.error,
        })
    })
}

const DeregisterForm = reduxForm({
    form: 'deregister',
    validate,
    onSubmit,

})(DeregisterFormView)

export default DeregisterForm