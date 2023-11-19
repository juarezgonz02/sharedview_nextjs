import React, { useEffect, useRef, useState } from 'react'
import flv from 'flv.js'
import { env } from '../../../../../next.config';
import { useParams, useSearchParams } from 'next/navigation';
import StreamInstruction from './StreamInstruction';
import Cookies from 'js-cookie'

const StreamPlayer = () => {

        const [loaded, setLoaded] = useState(false)

        const videoPlayerElement = useRef();

        const { rooms } = useParams()

        const videoSrc = `${process.env.NEXT_PUBLIC_MEDIA_PROTOCOL}://${process.env.NEXT_PUBLIC_MEDIA_HOST}:${process.env.NEXT_PUBLIC_MEDIA_PORT}/live/${rooms}.flv` +
            `?sign=${Cookies.get('room-exp')}-${Cookies.get('sign')}`;

        const play_stream = async () => {

            try{

              if (flv.isSupported()) {

                  flv.LoggingControl.enableError = false
                  flv.LoggingControl.enableAll = false
                  
                  const flvPlayer = flv.createPlayer({
                      type: 'flv',
                      url: videoSrc,
                      isLive: true
                  });

                  flvPlayer.on(flv.Events.METADATA_ARRIVED, ()=>{
                      setLoaded(true)
                      videoPlayerElement.current.className  = "loaded-stream-video"
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
            play_stream()
        }, [])

        return (
            <div className="video-container">

                {
                    !loaded &&
                    <StreamInstruction />
                }

                <div id="video-stream-cont">

                     <video autoPlay controls className={"stream-video"} ref={videoPlayerElement} ></video>

                </div>

            </div>)
}

export default StreamPlayer