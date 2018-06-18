import React from 'react'
import { connect } from 'react-redux'
import Users from 'Pages/Users'
import Channel from 'Pages/Channel'


const Profile = ({ username }) => (
    <main>
        <h1>Welcome, {username}!</h1>
        <p>Here you can -</p>
        <ul>
            <li><b> See  <Users /></b></li>
            <li><b>Create <Channel /></b> </li>
        </ul>

        <h1>Delete account</h1>
        <p>Warning, this will permanently delete your account. Your invitation code remains invalidated.</p>
    </main>
)

const mapStateToProps = state => ({
    username: state.user.name,
    channel: state.user.channel,
})


export default connect(mapStateToProps)(Profile)