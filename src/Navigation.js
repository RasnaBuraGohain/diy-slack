import React from 'react'
import Link from './Link'
const Navigation = () => (
  <nav>
    <Link to="/">PROFILE</Link>
    {' '}
    <Link to="/users">USERS</Link>
    {' '}
    <Link to="/channels">CHANNELS</Link>
    {' '}
  </nav>
)
export default Navigation