import React, { Component } from 'react'

export default class RoomList extends Component {
  render() {
    console.log(this.props.rooms)
    return (
      <div className="rooms-list">
        <ul>
          <h3>Your rooms:</h3>
          {this.props.rooms.map(room => {
            return (
              <li key={room.id} className="room">
                <a
                  onClick={() => this.props.subscribeToRoom(room.id)}
                  href="#"
                >
                  # {room.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
