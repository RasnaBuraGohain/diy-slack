import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import User from './User'

class UsersList extends PureComponent {
    render() {
        const {
            users
        } = this.props;

        const list = users.filter(user => user.name && user.connected).map((user, idx) => {
            return (
                <li key={idx}>
                    <span className="onlineusers">
                        <User id={user.id} />
                    </span>
                </li>
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

export default connect(mapStateToProps)(UsersList);
