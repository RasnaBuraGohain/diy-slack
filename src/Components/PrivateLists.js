import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


class PrivateList extends PureComponent {
  render() {
    const {
      message
    } = this.props;
    const list = message.map((message, idx) =>
      (<li className="chatlist" key={idx}>
        <p>
          {message.message}
        </p>
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
