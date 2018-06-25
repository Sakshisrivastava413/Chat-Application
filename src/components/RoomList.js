import React, { Component } from 'react'

export default class RoomList extends Component {
  render() {
    const orderedRooms = [...this.props.rooms].sort((a, b) => {a.id - b.id})
    console.log(this.props.rooms)
    return (
      <div className="rooms-list">
        <ul>
          <h3>Your rooms:</h3>
          {orderedRooms.map(room => {
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
