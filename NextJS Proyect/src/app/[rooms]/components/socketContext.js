'use client'

import {createContext, useContext, useEffect, useState, useRef} from "react";
import io from "socket.io-client";
import {Peer} from "peerjs";

export const socketContext = createContext();

let socket;
let id

const SocketContext = ({room, children}) => {
    const username =  localStorage.getItem("username") || `USER ${(Math.random()*999).toFixed(0)}`

    const peer = useRef();

    const [userMedia, setUserMedia] = useState(null)

    const mediaRef = useRef()

    const usersRef = useRef(new Map())

    const [usersList, setUsersList] = useState([])

    const [channelReady, setChannelStatus] = useState(false)

    const messagesState = useState([])

    const [messagesVars, setMessages] = messagesState

    const messages = useRef([])

    const newPeerHandler = (data)=>{

        console.log("know", data.userId)

        const newPeerCall = peer.current.call(data.userId, mediaRef.current, {
            metadata: {
                username: username,
                socketId: socket.id
            }
        })

        newPeerCall.on('stream', function(stream) {
            // `stream` is the MediaStream of the remote peer.
            // Here you'd add it to an HTML video/canvas element.
            usersRef.current.set(data.userId, {id: data.userId, socketId: data.socketId, username: data.username, media: stream, isMe: false})
            setUsersList([...usersList, data.userId])

            //usersRef.current.get(data.userId).media.current.srcObject = stream

        });

        socket.emit("received", {toSocketId: data.socketId, myUserId: id})


    }

    const incomingMessageHandler = (data)=>{

        console.log("NEW MESSAGE", data)
        messages.current = [...messages.current, data]
        setMessages(messages.current)

    }
    const deleteUserBySocketId = (socketId) => {
        let user_to_delete;

        usersRef.current.forEach((value, key)=>{
           if(value.socketId === socketId){
               console.log("Deleting...", key)
               usersRef.current.delete(key)
               setUsersList(usersRef.current)
           }
        })
    }

    const handleUserDisconnected = (socketId) => {
        console.log("USER DISCONECTED", socketId)
        deleteUserBySocketId(socketId)
    }

    const socketConnectionHandler = ()=>{
        console.log("Server Connected ")

        setChannelStatus(true)

        socket.on("new-peer", newPeerHandler)

        socket.on("incoming-message", incomingMessageHandler)

        socket.on("error", ()=>{
            console.log("Server Not found ")
        })

        socket.on("user-disconnected", handleUserDisconnected)
    }

    const gotStream = (stream) => {
        stream.getAudioTracks()[0].enabled = false
        console.log('Adding local stream.');
        mediaRef.current = stream

        setUserMedia(stream)
    }

    const getUserMedia = ()=> {

        (async ()=>{

            const stream = await navigator.mediaDevices.getUserMedia(
                { video: false, audio: true })

            gotStream(stream)
        })()

    }

    const getUserId = () =>{
        peer.current = new Peer()
    }

    const incomingCallHandler = (call) => {

        call.answer(mediaRef.current);

        call.on('stream', (stream) => {

            usersRef.current.set(call.peer,
                {
                    id: call.peer,
                    username: call.metadata.username,
                    socketId: call.metadata.socketId,
                    media: stream,
                    isMe: false
                })

            setUsersList([...usersList, call.peer])
        });

        call.on("close", ()=>{

            usersRef.current.delete(call.peer)

            setUsersList([...usersList, call.peer])
        })
    }

    const sendPeerOfferToOthers = (id) => {

        console.log("Send offer to room")

        socket.emit("offerToRoom", {
            userId: id,
            username: username,
            socketId: socket.id,
            room: room
        })

    }

    const setAnswerListener = () => {
        peer.current.on('open', (newId) => {

            id = newId

            usersRef.current.set(id, {id: id, username: username, media: mediaRef.current, isMe: true})

            setUsersList([...usersList, id])

            console.log('My peer ID is: ' + id);

            peer.current.on('call', incomingCallHandler);

            sendPeerOfferToOthers(newId)

        });
    };


    useEffect(() => {

        const socket_url = `${process.env.NEXT_PUBLIC_MEDIA_PROTOCOL}://${process.env.NEXT_PUBLIC_MEDIA_HOST}:${process.env.NEXT_PUBLIC_MEDIA_PORT}`

        socket = io(socket_url, {
             path: "/io/socket.io"
        })

        console.log("Try connection", socket_url)

        socket.on("connect",  socketConnectionHandler)

    }, []);


    useEffect(() => {

        console.log("ChannelStatus", channelReady)

        if(channelReady){
            getUserMedia()
        }

    }, [channelReady])

    useEffect(() => {

        if(userMedia === null){
            return
        }
        getUserId()

        setAnswerListener()

    }, [userMedia])

    useEffect(()=>{

        console.log(usersRef.current)

    }, [usersRef.current])


    const socketUsages = {

        socketConnection: socket,
        media: mediaRef,
        rtcPeer: peer,
        channelReady: channelReady,
        sendChatMessage: (message) => {
            messages.current = [...messagesVars, {room: room, msg: message, from: username, isMe: true }]
            setMessages(messages.current)
            socket.emit("newMessage", {room: room, msg: message, fromSocket: socket.id, from: username, isMe: false })
        },
        users: usersRef,
        messagesState: messagesState

    }


    return (
        <socketContext.Provider value={socketUsages}> {children} </socketContext.Provider>
    )
}

export default SocketContext