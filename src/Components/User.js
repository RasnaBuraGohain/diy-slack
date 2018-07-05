import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class User extends PureComponent {

  render() {
    const {
      name,
    } = this.props

    return (
      <div>{name}</div>
    )
  }
}



const mapStateToProps = (state, props) => {
  const matchingUsers = state.users.users.filter(user => user.id === props.id)
  return {
    name: matchingUsers.length ? matchingUsers[0].name : 'unknown'
  }
}

export default connect(mapStateToProps)(User);