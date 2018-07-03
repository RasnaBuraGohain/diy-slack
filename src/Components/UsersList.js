import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class UsersList extends PureComponent {
    render() {
        const {
            users
        } = this.props;
        const list = users.map((user, idx) =>
            (<li key={idx}>
                <button className="userlist">
                    {user.name}
                </button>
            </li >
            ))
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
