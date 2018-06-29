import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Message from "./Message"

export default class MessageList extends Component {

  // componentWillUpdate() {
  //   const node = ReactDOM.findDOMNode(this)
  //   console.log("node: ", node)
  //   this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
  // }

  // componentDidUpdate() {
  //   if (this.shouldScrollToBottom) {
  //     const node = ReactDOM.findDOMNode(this)
  //     console.log("node2: ", node)
  //     node.scrollTop = node.scrollHeight
  //   }
  // }

  render() {
    if (!this.props.roomId) {
      return (
          <div className="message-list">
              <div className="join-room">
                  &larr; Join a room!
              </div>
          </div>
      )
  }
    return (
      <div>
        <div className="message-list">
          {this.props.messages.map((message, index) => {
            return (
              <div key={index}>
                <Message username={message.senderId} text={message.text} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
