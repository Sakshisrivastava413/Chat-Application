import React, { Component } from 'react'

export default class NewRoomForm extends Component {

  constructor() {
    super()
    this.state = {
      RoomName : ''
    }
  }

handleChange = (e) => {
  this.setState({
    RoomName : e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.createRoom(this.state.RoomName)
  this.setState({
    RoomName: ''
  })
}

  render() {
    return (
      <div className="new-room-form">
        <form onSubmit={this.handleSubmit}>
          <input
          value={this.state.RoomName}
          onChange={this.handleChange}
            type="text"
            placeholder="NewRoomForm"
            required />
          <button id="create-room-btn" type="submit">+</button>
        </form>
      </div>
    )
  }
}
