import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Navigation from './Navigation'

const Profile = () => <p>the Profile page</p>
const Users = () => <p>Users List</p>
const Channels = () => <p>This is the Channels page</p>
const NotFound = () => <p>Error! 404</p>

const routingTable = {
  '/': <Profile />,
  '/users': <Users />,
  '/channels': <Channels />,
}

class App extends Component {
  render() {
    const {
      location,
    } = this.props

    let page
    const route = routingTable[location]
    if (!route) {
      page = <NotFound />
    } else {
      page = route
    }

    return (
      <div className="App">
        <Navigation />
        <hr />
        {page}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  location: state.router.pathname,
})

export default connect(mapStateToProps)(App);