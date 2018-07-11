import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Chatmessages extends PureComponent {
  constructor() {
    super()
    this.state = { sendMessage: '' }
  }

  renderExample = (message, index) => {
    const handler = event => {
      this.setState({ sendMessage: message })
    }
    return (
      <div key={index}>
        <li>
          <button className="try"
            disabled={this.props.disconnected}
            onClick={handler}>
            {message}
          </button>
        </li>
      </div>
    )
  }
  render() {

    const examples = [
      'Hi',
      'How are you ?',
      'I am doing good, thank you.',
    ]
    return (
      <div>
        <label> Messages :</label>
        <ul>
          {examples.map(this.renderExample)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  message: state.private.log
})

export default connect(mapStateToProps)(Chatmessages)