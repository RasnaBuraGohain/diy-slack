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
    </main>
)

const mapStateToProps = state => ({
    name: state.connection.name,
    channel: state.connection.channel,
})


export default connect(mapStateToProps)(Profile)