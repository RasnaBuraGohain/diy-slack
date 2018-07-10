import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import User from './User'

class SendToList extends PureComponent {
  render() {
    const {
      selectUser,
      users
    } = this.props;

    const list = users.filter(user => user.name && user.connected).map((user, idx) => {
      return (
        <ul key={idx}>
          <button onClick={selectUser}>
            <User id={user.id} />
          </button>
        </ul >
      )
    })
    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  users: state.users.users
})

export default connect(mapStateToProps)(SendToList);
