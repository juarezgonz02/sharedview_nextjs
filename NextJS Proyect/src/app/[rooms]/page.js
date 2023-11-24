'use client';
import Chat from "./components/ChatComponent/chat";
import SocketContext from "./components/socketContext";
import StreamPlayer from "./components/StreamPlayer/streamplayer";
import CallInterface from "./components/CallInterface/callInterface";
import "./main.css"

export default function Page({ params }) {

  return (
  <SocketContext room={params.rooms} >
    <div className="flex ml-8 mt-8 ">

      <div className="main-container">

        <StreamPlayer />
        <CallInterface />

      </div>
      <Chat />
    </div>

  </SocketContext>
  )
}