import React, { Component } from 'react';
import MessageList from "./components/MessageList";
import NewRoomForm from "./components/NewRoomForm";
import RoomList from "./components/RoomList";
import SendMessageFrom from "./components/SendMessageFrom";

class App extends Component {

  
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
