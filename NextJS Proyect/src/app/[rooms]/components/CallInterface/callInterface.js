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
    <div className="control-users-container">

      <div>
        <p> En la llamada: </p>
      </div>

      <div id="remoteAudio-container">
          <VoiceController username={"Me"} key={"voice-controller-component"}></VoiceController>
          <div className="flex h-fit">
          {
              Array.from(users_in_call.current.values()).map((u) =>
                  !u.isMe &&
                  <div className="flex flex-col" key={`container_of_${u.id}`}>
                    <RemoteStream stream={u.media} id={u.id} key={`audio_of_${u.id}`} />
                    <P5Sketch media={u.media} username={u.username} key={`sketch_of_${u.id}`} />
                    <span> {u.username} </span>
                  </div>
              )
          }
          </div>
      </div>
    </div>
  )
}

export default CallInterface