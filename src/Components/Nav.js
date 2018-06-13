import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'
import Link from 'Components/Link'
import DisconnectButton from 'Components/DisconnectButton';

const Nav = ({ dispatch, username, loggedIn }) => {
  const userLinks = loggedIn ?
    [
      <Link to="/profile">Profile</Link>,
      <DisconnectButton onDisconnect={() => dispatch(push("/"))} />,
    ] : [
      <Link to="/chat">CHAT</Link>,
      (' '),
    ]

  return (
    <nav>
      <Link to="/">HOME</Link>
      {' '}
      <Link to="/profile">PROFILE</Link>
      {' '}
      <Link to="/users">USERS</Link>
      {' '}
      <Link to="/channel">CHANNELS</Link>
      {' '}
      {userLinks}
    </nav>
  )
}
const mapStateToProps = state => ({
  connected: true,
  username: '',
})

export default connect(mapStateToProps)(Nav)