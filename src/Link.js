import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

class Link extends Component {
  render() {
    const {
      dispatch,
      to,
      children,
    } = this.props

    return (
      <a href={to} onClick={(event) => {
        event.preventDefault()
        dispatch(push(to))
      }}>
        {children}
      </a>
    )
  }
}

export default connect()(Link)