import React, {useEffect, useState} from 'react';
import {Button, ConfigProvider, Tag} from "antd";
import Cookies from "js-cookie";
import ico from "../../assets/ICONO.png"
import Image from "next/image";

const StreamInstruction = ({isLoaded}) => {
    const mediaUrl = "rtmp://media.sharedview.live:1935/live/"
    const signKey = `${document.location.pathname.substring(1)}?sign=${Cookies.get("room-exp")}-${Cookies.get("sign")}&expiration=${Cookies.get("room-exp")}`
    const copy = async (txt) => {
          try {
                await navigator.clipboard.writeText(txt);
                console.log('Page URL copied to clipboard');
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
    }

    const [visibilityClass, setVisibilityClass] = useState("w-4/5 flex visible justify-center flex-col");
    useEffect(() => {
        if(isLoaded){
            setVisibilityClass("hidden")
        }
    }, [isLoaded]);

    return (
        <div className={visibilityClass}>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#801cb7"
                },
                components: {
                    Button: {
                        colorPrimary: "#801cb7",
                    },
                },
            }}
        >
            <Image className={"w-2/5"} src={ico}  alt={"sharedview img"} />
            <h2 className={"w-fit"}>
                {`Instructions`}
            </h2>
            <p className={"w-fit"} >
                {`0. Get any broadcast app (like OBS, Streamlabs)`}
            </p>
            <p className={"w-fit"}>
                {`1. Use custom RTMP for broadcasting`}
            </p>
            <p className={"w-fit"}>
                {`2. In url place: `}
            </p>
            <p className={"w-fit"}>
                <Tag color="purple">
                    {`${mediaUrl}  `}
                 </Tag>
                <Button type="dashed" ghost onClick={()=>copy(mediaUrl)}>Copy</Button>
            </p>
            <p className={"w-fit"}>
                {`3. In stream key use: `}
            </p>
            <p className={"w-fit"}>
                <Tag color="purple">
                    {`${signKey}  `}
                </Tag>
                <Button type="dashed" ghost onClick={()=>copy(signKey)}>Copy</Button>

            </p>
            <p className={"w-fit"}>
                {`4. Happy live 🔴!`}
            </p>
            <p>
                <br />
                <Button ghost size={"large"} onClick={()=>document.location.reload()} >Reload</Button>
            </p>

        </ConfigProvider>
        </div>
    );
};

export default StreamInstruction;