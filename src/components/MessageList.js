import React, { Component } from 'react'
import Message from "./Message"

export default class MessageList extends Component {

  render() {
    return (
      <div>
        <div className="message-list">
          {this.props.messages.map((message, index) => {
            return (
              <div className="message" key={index}>
                <Message username={message.senderId} text={message.text} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
