import React, { useEffect, useRef, useState } from 'react'
import flv from 'flv.js'
import { useParams, useSearchParams } from 'next/navigation';
import StreamInstruction from './StreamInstruction';
import Cookies from 'js-cookie'
import NavbarCall from './NavbarCall';

const StreamPlayer = ({toggleChat}) => {

    const [loaded, setLoaded] = useState(false)

    const videoPlayerElement = useRef();

    const { rooms } = useParams()

    const videoSrc = `${process.env.NEXT_PUBLIC_MEDIA_PROTOCOL}://${process.env.NEXT_PUBLIC_MEDIA_HOST}:${process.env.NEXT_PUBLIC_MEDIA_PORT}/live/${rooms}.flv` +
        `?sign=${Cookies.get('room-exp')}-${Cookies.get('sign')}`;

    const play_stream = async () => {

        try {

            if (flv.isSupported()) {

                flv.LoggingControl.enableError = false
                flv.LoggingControl.enableAll = false

                const flvPlayer = flv.createPlayer({
                    type: 'flv',
                    url: videoSrc,
                    isLive: true
                });

                flvPlayer.on(flv.Events.METADATA_ARRIVED, () => {
                    setLoaded(true)
                    videoPlayerElement.current.className = "static loaded-stream-video"
                })

                flvPlayer.attachMediaElement(videoPlayerElement.current);
                flvPlayer.load();
                flvPlayer.play()

            }
        } catch (e) {
            console.log("Stream Server Connection Failed")
        }
    }

    useEffect(() => {
        try {
            play_stream()
        } catch (e) {
            console.log("Stream Server Connection Failed")
        }
    }, [])

    return (
        <div className="flex flex-col items-start gap-4 justify-start w-full">
            <NavbarCall toggleChat={toggleChat}/>
            <StreamInstruction isLoaded={loaded}/>
            <div hidden={!loaded} className="w-11/12 rounded-md">
                <video autoPlay controls className={"stream-video"} ref={videoPlayerElement} ></video>
            </div>

        </div>)
}

export default StreamPlayer