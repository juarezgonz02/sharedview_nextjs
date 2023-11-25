'use client';
import Chat from "./components/ChatComponent/chat";
import SocketContext from "./components/socketContext";
import StreamPlayer from "./components/StreamPlayer/streamplayer";
import CallInterface from "./components/CallInterface/callInterface";
import VoiceController from "@/app/[rooms]/components/CallInterface/VoiceController";
import ChatController from "@/app/[rooms]/components/ChatComponent/ChatController";
import { useState } from "react";
import "./main.css"

export default function Page({ params }) {

  const [showChatState, toogleShowing] = useState(false)

  return (
  <SocketContext room={params.rooms} >
    <div className="flex m-8 justify-around">

      <div className="main-container">

        <StreamPlayer />
        <div id="remoteAudio-container" >
          <div className="flex flex-auto w-auto items-end justify-around" >
            <VoiceController username={"Me"} key={"voice-controller-component"}></VoiceController>
            <ChatController state={showChatState} changeState={toogleShowing}> </ChatController>
          </div>
          <CallInterface />
        </div>

      </div>
      <Chat showChat={showChatState} />
    </div>

  </SocketContext>
  )
}