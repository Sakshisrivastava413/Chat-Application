import React, { Component } from 'react'


export default class MessageList extends Component {

  render() {
    return (
      <div>
        <div className="message-list">
        {this.props.messages.map((message, index) => {
          return (
            <div key={index}>
              <div>{message.senderId}</div>
              <div>{message.text}</div>
            </div>
          )
        })}
      </div>
      </div>
    )
  }
}
