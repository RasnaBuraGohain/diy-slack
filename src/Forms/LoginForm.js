import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { send } from 'store/websocket'

const LoginForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className = "Login" >
                <label>Username</label>
                    <Field
                        name="username"
                        component="input"
                        type="text"
                        placeholder="Username"
                    />
                <button type="submit">LOGIN</button>
            </div>
        </form>
    )
}

const validate = ({ username }) => {
    const errors = {}
    if (!username && username === '') {
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

export default reduxForm({
    form: 'login',
    validate,
    onSubmit,
    initialValues: {
        username: "Rasna",

    },
})(LoginForm)
