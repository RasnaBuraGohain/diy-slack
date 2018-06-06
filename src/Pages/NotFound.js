import React from 'react'
import { connect } from 'react-redux'
import Link from 'Components/Link'

const NotFound = ({ dispatch }) => (
    <main>
        <h1>Error</h1>
        <p>Page not found, please return to the Welcome Page.</p>
        <Link to="/">Return</Link>
    </main>
)

export default connect()(NotFound)