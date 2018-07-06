import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Chatmessages extends PureComponent {

  render() {
    const {
      message,
    } = this.props

    return (
      <div>{message}</div>
    )
  }
}

const mapStateToProps = (state) => ({
  message: state.private.log
})

export default connect(mapStateToProps)(Chatmessages)