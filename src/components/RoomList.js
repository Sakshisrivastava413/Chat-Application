import React, { Component } from 'react'

export default class RoomList extends Component {
  render() {
    console.log(this.props.rooms)
    return (
      <div className="rooms-list">
        <ul>
          <h3>Your Rooms: </h3>
          {this.props.rooms.map(room => {
            <li key={room.id} className="room">
              <a href="#">{room.name}</a>
            </li>
          })
          }

        </ul>

      </div>
    )
  }
}
