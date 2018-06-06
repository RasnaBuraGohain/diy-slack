import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'
import LoginForm from 'Components/LoginForm'

const Login = ({ dispatch }) => (
    <main>
        <h1>Login</h1>
        <LoginForm onLogin={() => dispatch(push("/profile"))} />
    </main>
)

export default connect()(Login)