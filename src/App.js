import React, { Component } from 'react';
import MessageList from "./components/MessageList";
import NewRoomForm from "./components/NewRoomForm";
import RoomList from "./components/RoomList";
import SendMessageFrom from "./components/SendMessageFrom";
import Chatkit from "@pusher/chatkit"
import { tokenUrl, instanceLocator } from "./config.js"



class App extends Component {
  
  
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
        currentUser.subscribeToRoom({
            roomId: 10162507, 
            hooks: {
                onNewMessage: message => {
                    console.log('message.text: ', message.text);
                }
            }
        })
    })
}
  
  render() {
    return (
     <div>
       <RoomList />
       <MessageList />
       <NewRoomForm />
       <SendMessageFrom />
      </div>
    );
  }
}

export default App;
