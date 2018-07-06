import React, { PureComponent } from 'react';
import User from './User';
import { connect } from 'react-redux';

class PrivateList extends PureComponent {
  render() {
    const {
      message,

    } = this.props;
    const list = message.map((message, idx) =>
      (<li className="chatlist" key={idx}>
        <b className="name">
          <User id={message.id} />
        </b>
        : {message.message}
      </li >
      ))
    return (
      <div className="Msg">
        <div>Chat Box
          {list}
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  message: state.private.log
})

export default connect(mapStateToProps)(PrivateList);
