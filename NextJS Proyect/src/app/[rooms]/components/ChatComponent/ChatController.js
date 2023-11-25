import React, {useContext, useEffect, useRef, useState} from 'react';
import {socketContext} from "@/app/[rooms]/components/socketContext";
import Image from "next/image";
import icon from "../../assets/chat-square.svg"
const ChatController = ({username}) => {

    const [muted, setMute] = useState(false)
    const { media, channelReady } = useContext(socketContext)

    const switchMute = ()=>{

        if(channelReady){

            if(!muted){
                media.current.getAudioTracks()[0].enabled=true;
                setMute(true);
            }else{
                media.current.getAudioTracks()[0].enabled=false;
                setMute(false);
            }
        }
    }


    return (
        <div className="controler-box chat">
            <div className="controler-container">
                <div onClick={switchMute} className="chat_closed" id="controler">
                    <Image className="chat-icon" src={icon} alt={"icon"}></Image>
                </div>
            </div>
            <span> Chat </span>
        </div>
    );
};

export default ChatController;