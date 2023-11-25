import React, {useContext, useEffect, useRef, useState} from 'react';
import {socketContext} from "@/app/[rooms]/components/socketContext";
import Image from "next/image";
import icon from "../../assets/chat-square.svg"
const ChatController = ({state, changeState}) => {

    const switchShow = ()=>{
        changeState(!state) //Toogle state
    }

    return (
        <div className="controler-box chat">
            <div className="controler-container">
                <div onClick={switchShow} className="chat_closed" id="controler">
                    <Image className="chat-icon" src={icon} alt={"icon"}></Image>
                </div>
            </div>
            <span> Chat </span>
        </div>
    );
};

export default ChatController;