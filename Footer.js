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
          <p>Connection activity:</p>
          <ul>
            {messages.map(this.renderMessage)}
          </ul>
        </footer>
      </div>
    )
  }
  renderMessage(message, idx) {
    return (
      <li key={idx}>
        <pre>{message}</pre>
      </li>
    )
  }
}
const mapStateToProps = state => ({
  messages: state.messages.log,
})

export default connect(mapStateToProps)(FooterView)