import { useContext, useEffect, useRef, useState } from "react"
import { gotStream, JoinCall } from "../../libs/webrtc"
import { socketContext } from "../socketContext";
import LocalAudio from "./LocalAudio";
import P5Sketch from "@/app/[rooms]/libs/p5";
import RemoteStream from "@/app/[rooms]/components/CallInterface/RemoteStream";
import VoiceController from "@/app/[rooms]/components/CallInterface/VoiceController";

const CallInterface = () => {

 const users_in_call = useContext(socketContext).users
  return (
    <div className="flex flex-col w-auto items-center gap-2 justify-center">
      <div >
          <div className="flex">
          {
              Array.from(users_in_call.current.values()).map((u) =>
                  !u.isMe &&
                  <div className="flex flex-col items-center justify-center" key={`container_of_${u.id}`}>
                    <RemoteStream stream={u.media} id={u.id} key={`audio_of_${u.id}`} />
                    <P5Sketch media={u.media} username={u.username} key={`sketch_of_${u.id}`} />
                    <span className="text-sm"> {u.username} </span>
                  </div>
              )
          }
          </div>
      </div>
    </div>
  )
}

export default CallInterface