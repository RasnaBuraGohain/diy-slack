import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { send } from 'store/websocket'

const LoginFormView = ({ handleSubmit, error, validate, submitting }) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}

            <div class="pure-control-group">
                <label htmlFor="username">Username:</label>
                <Field name="username" component="input" type="text" placeholder="Username" />
            </div>

            <button disabled={submitting} type="submit">
                LOGIN
            </button>
        </form>
    )
}

const validate = ({ username }) => {
    const errors = {}
    if (username === "") {
        errors.username = 'missing username'
    }

    return errors
}

const onSubmit = ({ username }, dispatch) => {
    const command = {
        command: "name",
        name: username,
    }

    dispatch({ type: send, payload: command })

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