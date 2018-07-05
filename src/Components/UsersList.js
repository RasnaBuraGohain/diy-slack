import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import User from './User'

class UsersList extends PureComponent {
    render() {
        const {
            users
        } = this.props;

        const list = users.filter(user => user.name && user.connected).map((user, idx) => {
            console.log(user)
            return (
                <li key={idx}>
                    <User id={user.id} />
                </li>
            )
        })
        return (
            <div className="sidebar">
                <div>Users online:
                    <ul>
                        {list}
                    </ul>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    users: state.users.users
})

export default connect(mapStateToProps)(UsersList);
