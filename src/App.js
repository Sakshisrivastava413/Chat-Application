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
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    }
  }


  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'Akshat',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser

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

        this.currentUser.subscribeToRoom({
          roomId: 10162507,
          hooks: {
            onNewMessage: message => {
              // console.log('message.text: ', message.text);
              this.setState({
                messages: [...this.state.messages, message]
              })
            }
          }
        })
      })
      .catch = (err) => {
        console.log("error in connecting", err)
      } 
  }

  sendMessage = (text) => {
    this.currentUser.sendMessage({
      text,
      roomId: 10162507
    })
  }

  render() {
    return (
      <div>
        <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
        <MessageList messages={this.state.messages} />
        <SendMessageFrom sendMessage={this.sendMessage} />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
