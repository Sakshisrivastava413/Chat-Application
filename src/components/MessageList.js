import React, { Component } from 'react'

const DUMMY_DATA = [
  {
    senderId: "sakshi",
    text: "How are you?"
  },
  {
    senderId: "akshat",
    text: "I am fine. What about you?"
  }
]

export default class MessageList extends Component {

  render() {
    return (
      <div>
        <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
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
