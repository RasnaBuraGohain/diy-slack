import React, { Component } from 'react'
import { connect } from 'react-redux'

class FooterView extends Component {
  render() {
    const {
      messages,
    } = this.props

    return (
      <div>
        <footer>
          <ul> Connection activity:
            {messages.map(this.renderMessage)}
          </ul>
        </footer>
      </div>
    )
  }
  renderMessage(message, idx) {
    return (
      <li key={idx}>
        {message}
      </li>
    )
  }
}
const mapStateToProps = state => ({
  messages: state.messages.log,
})

export default connect(mapStateToProps)(FooterView)