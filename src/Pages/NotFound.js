import React from 'react'
import { connect } from 'react-redux'


const NotFound = () => (
    <main>
        <h1>Error</h1>
        <p>Page not found, please return to the Home Page.</p>
    </main>
)

export default connect()(NotFound)