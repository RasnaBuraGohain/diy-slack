import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'
import LoginForm from 'Forms/LoginForm'

const Login = ({ dispatch }) => (
    <main>
        <h1>Login</h1>
        <LoginForm onChange={() => {

            dispatch(push("/Chat"))
        }} />
    </main>
)

export default connect()(Login)

