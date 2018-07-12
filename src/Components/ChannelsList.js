import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ChannelForm from '../Forms/ChannelForm'

class ChannelsList extends PureComponent {
  render() {
    const {
      channels,
    } = this.props;

    const list = channels.map((channel, idx) => (
      <li key={idx}>
        <button className="userlist">
          {channel}
        </button>
      </li >
    ))

    return (
      <div >
        <ChannelForm />
        <hr />
        <div>
          <label>Channels list:</label>
          <ul>
            {list}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  channels: state.channels.channels
})

export default connect(mapStateToProps)(ChannelsList)