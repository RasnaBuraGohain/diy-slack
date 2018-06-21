import React from 'react'
import { connect } from 'react-redux'


const NotFound = ({ dispatch }) => (
    <main>
        <h1>Error</h1>
        <p>Page not found, please return to the Welcome Page.</p>
    </main>
)

export default connect()(NotFound)