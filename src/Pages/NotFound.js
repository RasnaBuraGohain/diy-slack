import React from 'react'
import { connect } from 'react-redux'
import Home from './Home'

const NotFound = () => (
    <main>
        <h1>Error</h1>
        <p>Page not found, please return to the {Home}</p>
    </main>
)

export default connect()(NotFound)