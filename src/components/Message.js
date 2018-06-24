import React from 'react'

export default function Message(props) {
  
    return (
      <div>
        <div className="message-username">{props.username}</div>
        <div className="message-text">{props.text}</div>
      </div>
    )
  }

