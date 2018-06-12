import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'
import Link from 'Components/Link'
import LogoutButton from 'Components/LogoutButton';

const Nav = ({ dispatch, username, loggedIn }) => {
  const userLinks = loggedIn ?
    [
      <Link to="/profile">Profile</Link>,
      <LogoutButton onLogout={() => dispatch(push("/"))} />,
    ] : [
      <Link to="/chat">CHAT</Link>,

      <Link to="/login">LOGIN</Link>,
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
  loggedIn: false,
  username: 'rasna',
})

export default connect(mapStateToProps)(Nav)