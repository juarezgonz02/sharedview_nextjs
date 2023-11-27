'use client';
import Chat from "./components/ChatComponent/chat";
import SocketContext from "./components/socketContext";
import StreamPlayer from "./components/StreamPlayer/streamplayer";
import CallInterface from "./components/CallInterface/callInterface";
import VoiceController from "@/app/[rooms]/components/CallInterface/VoiceController";
import "./main.css"

export default function Page({ params }) {
  return (
    <SocketContext room={params.rooms} >
      <div className="flex flex-row items-center justify-center min-h-screen mx-8">
        <div className="w-3/4 h-max flex flex-col items-start justify-center gap-8">
          <StreamPlayer />
          <div className="flex flex-row items-center justify-center gap-6">
            <VoiceController username={"Me"} key={"voice-controller-component"}></VoiceController>
            <CallInterface />
          </div>
        </div>
        <div className="w-1/4 h-max flex items-center justify-center">
          <Chat />
        </div>
      </div>

    </SocketContext>
  )
}