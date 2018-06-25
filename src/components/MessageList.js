import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Message from "./Message"

export default class MessageList extends Component {

  componentWillUpdate() {
    const node = ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
  }

  componentDidUpdate() {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this)
      node.scrollTop = node.scrollHeight
    }
  }

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
