import React, { Component } from 'react';
import MessageList from "./components/MessageList";
import NewRoomForm from "./components/NewRoomForm";
import RoomList from "./components/RoomList";
import SendMessageFrom from "./components/SendMessageFrom";
import Chatkit from "@pusher/chatkit"
import { tokenUrl, instanceLocator } from "./config.js"
import "./style.css"


class App extends Component {
  constructor() {
    super()
    this.state = {
      roomId: 0,
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    }
  }


  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'sakshi',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser
        this.getRooms();
        // this.subscribeToRoom();
      })
      .catch = (err) => {
        console.log("error in connecting", err)
      }
  }

  subscribeToRoom = (roomId) => {
    this.setState({
      messages: []
    })
    this.currentUser.subscribeToRoom({
      roomId,
      hooks: {
        onNewMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
          })
        }
      }
    })
      .then(room => {
        this.setState({
          roomId: room
        })
        this.getRooms();
      })
      .catch(err => {
        console.log("error in subscribing to room", err)
      })
  }

  getRooms = () => {
    this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch = (err) => {
        console.log("error in joinable rooms", err)
      }
  }

  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    })
  }

  createRoom = (name) => {
    this.currentUser.createRoom({
      name,
    })
      .then(room => {
        this.subscribeToRoom(room.id);
      })
      .catch(err => {
        console.log("error in creating room:", err)
      })
  }

  render() {
    return (
      <div>
        <RoomList
          roomId={this.state.roomId}
          subscribeToRoom={this.subscribeToRoom}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
        />
        <MessageList 
        roomId={this.state.roomId}
        messages={this.state.messages} />
        <SendMessageFrom
        disabled={!this.state.roomId} 
        sendMessage={this.sendMessage} 
        />
        <NewRoomForm createRoom={this.createRoom} />
      </div>
    );
  }
}

export default App;
