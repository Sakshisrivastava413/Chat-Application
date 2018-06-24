import React, { Component } from 'react'

export default class SendMessageFrom extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.message)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="send-message-form">
          <input
            onChange={this.handleChange}
            value={this.state.message}
            placeholder="Type your message and hit ENTER"
            type="text"
          />
        </form>
      </div>
    )
  }
}
