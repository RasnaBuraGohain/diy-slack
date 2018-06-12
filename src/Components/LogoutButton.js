import React from 'react'
import { connect } from 'react-redux'

const LogoutButton = ({ dispatch, onLogout }) => (
    <button>
        Log out
    </button>
)

export default connect()(LogoutButton)