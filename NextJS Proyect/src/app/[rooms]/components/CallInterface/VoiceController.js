import React, { useContext, useEffect, useRef, useState } from "react";
import { socketContext } from "@/app/[rooms]/components/socketContext";
import { AudioOutlined } from "@ant-design/icons";
import { AudioMutedOutlined } from "@ant-design/icons";

const VoiceController = ({ username }) => {
    const [muted, setMute] = useState(false);
    const { media, channelReady } = useContext(socketContext);

    const switchMute = () => {
        if (channelReady) {
            if (!muted) {
                media.current.getAudioTracks()[0].enabled = true;
                setMute(true);
            } else {
                media.current.getAudioTracks()[0].enabled = false;
                setMute(false);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-between">
            <div className="flex flex-row items-center">
                {muted == null && (
                    <div
                        onClick={switchMute}
                        className="controler_waiting border border-warning"
                        id="controler"
                    ></div>
                )}
                {muted && (
                    <AudioOutlined
                        onClick={switchMute}
                        id="controler"
                        twoToneColor="#52c41a"
                        style={{ fontSize: "40px", color: "#52c41a" }}
                    />
                )}
                {!muted && (
                    <AudioMutedOutlined
                        onClick={switchMute}
                        id="controler"
                        style={{ fontSize: "40px", color: "#ff0000" }}
                    />
                )}
            </div>
            <p className="text-white text-sm">{username}</p>
        </div>
    );
};

export default VoiceController;
