import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

const Link = ({ dispatch, to, children }) => (
  <button onClick={(event) => {
    event.preventDefault()
    dispatch(push(to))
  }}>
    {children}
  </button>
)

export default connect()(Link)