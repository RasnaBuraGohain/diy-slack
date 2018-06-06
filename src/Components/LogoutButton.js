import React from 'react'
import { connect } from 'react-redux'
import { logout } from 'store/user'

const LogoutButton = ({ dispatch, onLogout }) => (
    <button onClick={() => {
        const p = dispatch(logout())
        if (onLogout) {
            p.then(onLogout)
        }
    }}>
        Log out
    </button>
)

export default connect()(LogoutButton)