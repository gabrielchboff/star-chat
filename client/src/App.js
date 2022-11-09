import './App.css';

import io from "socket.io-client";
import { useState } from 'react';
import Chat from './components/Chat';
import { 
  Input,
  Button 

} from '@chakra-ui/react'

const socket = io.connect("http://localhost:3001");


function App() {

  const [username, setUsename] = useState("");
  const [room, setRoom] = useState("")

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
    }
  }

  return (
    <div className="App">
      <h3>
      Join in the Chat
      </h3>
      <Input type="text" placeholder="Jhon Doe..." 
        onChange={(event) => {
          setUsename(event.target.value);
        }}
      />
      <Input type="text" placeholder="Room ID"
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <Button onClick={joinRoom}>Join A Room</Button>
      <Chat socket={socket} username={username} room={room}>

      </Chat>
    
    </div>
  );
}

export default App;
