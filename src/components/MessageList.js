import React, { Component } from 'react'


export default class MessageList extends Component {

  render() {
    return (
      <div>
        <div className="message-list">
        {this.props.messages.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className="message-username">{message.senderId}</div>
              <div className="message-text">{message.text}</div>
            </div>
          )
        })}
      </div>
      </div>
    )
  }
}
