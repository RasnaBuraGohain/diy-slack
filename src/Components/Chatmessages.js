import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Chatmessages extends PureComponent {

  render() {
    const {
      message,
    } = this.props

    const renderMessage = (message, idx) => (
      <li key={idx}>
        {message}
      </li>
    )
    return (
      <div>
        <ul>{message.map(renderMessage)}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.private.log
})

export default connect(mapStateToProps)(Chatmessages)