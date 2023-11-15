import React, {useContext, useEffect, useRef, useState} from 'react';
import {socketContext} from "@/app/[rooms]/components/socketContext";

const VoiceController = () => {

    const [muted, setMute] = useState(true)
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
        <div className="controler-container">
            {
                muted == null && <div onClick={switchMute} className="controler_waiting border border-warning" id="controler"></div>

            }
            {
                muted && <div onClick={switchMute} className="controler border border-green" id="controler"></div>

            }
            {

                !muted && <div  onClick={switchMute} className="controler_closed" id="controler"></div>
            }
        </div>
    );
};

export default VoiceController;