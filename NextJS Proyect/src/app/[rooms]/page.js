"use client";
import React, { useState } from "react";
import Chat from "./components/ChatComponent/chat";
import SocketContext from "./components/socketContext";
import StreamPlayer from "./components/StreamPlayer/streamplayer";
import CallInterface from "./components/CallInterface/callInterface";
import VoiceController from "@/app/[rooms]/components/CallInterface/VoiceController";
import "./main.css";

export default function Page({ params }) {
  const [chatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const chatWebStyle = {
  }

  const chatMobileStyle = {
    display: "flex",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "100",
    backgroundColor: "rgba(0,0,0,0.8)",
  }


  return (
    <SocketContext room={params.rooms}>
      <div className="flex flex-row items-center justify-center min-h-screen mx-8 tablet:flex-col">
        <div className="w-3/4 h-max flex flex-col items-start justify-center gap-8 tablet:w-full tablet:h-full">
        <StreamPlayer toggleChat={toggleChat} />
          <div className="flex flex-row items-center justify-center gap-6">
            <VoiceController
              username={"Me"}
              key={"voice-controller-component"}
            ></VoiceController>
            <CallInterface />
          </div>
        </div>
        <div
          id="chat"
          className="w-1/4 h-max flex items-center justify-center tablet:hidden"
          style={chatVisible ? chatMobileStyle : chatWebStyle}
          >
          <Chat toggleChat={toggleChat} />
        </div>
      </div>
    </SocketContext>
  );
}
