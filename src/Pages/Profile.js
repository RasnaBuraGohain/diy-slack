import React from 'react'
import { connect } from 'react-redux'
import Users from 'Components/UsersList'
import ChannelForm from 'Forms/ChannelForm'


const Profile = ({ username }) => (
    <main>
        <h1>Welcome, {username}!</h1>
        <p>Here you can -</p>
        <ul>
            <li><b> See  <Users /></b></li>
            <li><b>Create <ChannelForm /></b> </li>
        </ul>

        <h1>Delete account</h1>
        <p>Warning, this will permanently delete your account. Your invitation code remains invalidated.</p>
    </main>
)

const mapStateToProps = state => ({
    name: state.connection.name,
    channels: state.connection.channels,
})


export default connect(mapStateToProps)(Profile)