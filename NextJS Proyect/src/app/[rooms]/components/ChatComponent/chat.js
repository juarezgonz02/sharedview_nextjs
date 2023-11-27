"use client";
import React from "react";
import { useContext, useEffect, useState } from "react";
import MessageComponent from "./message";
import { socketContext } from "@/app/[rooms]/components/socketContext";
import { Form, Input } from "antd";
import { ConfigProvider } from "antd";
import { SendOutlined } from "@ant-design/icons";

const Chat = ({ showChat }) => {
    const formRef = React.useRef(null);
    const sendChatMessage = useContext(socketContext).sendChatMessage;

    const [messages, setMessages] = useContext(socketContext).messagesState;

    const send = (values) => {
        setMessages([{from: "Me", msg: values.identifier, isMe: true}, ...messages])
        sendChatMessage(values.identifier);
        formRef.current.resetFields();
    };


    return (
        <div className="flex flex-col justify-between w-full px-4 rounded-md h-screen-90 py-8 bg-dark">
            <div className="flex flex-col items-center justify-center gap-2">
                <span>Mensajes de la llamada</span>
                <span className="text-center text-xs opacity-50">
                    Los mensajes se borran al finalizar la llamada
                </span>
            </div>

            <div id="messages-container" className="flex flex-col w-full h-4/5 overflow-y-auto gap-2 p-4">
                {messages.map((message) => {
                    const currentTime = new Date().toLocaleTimeString("en-US", {
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                    });
                    return (
                        <MessageComponent
                            key={currentTime + message.from}
                            isMe={message.isMe}
                            time={currentTime}
                            messageText={message.msg}
                            messageTitle={message.from}
                        />
                    );
                })}
            </div>
            <ConfigProvider
                theme={{
                    components: {
                        Input: {
                            colorBgContainer: "#181818",
                            colorBorder: "#1e1e1e",
                            colorBorder: "rgba(255, 255, 255, 0.4)",
                            colorText: "#fff",
                            colorTextPlaceholder: "rgba(255, 255, 255, 0.4)",
                            activeBorderColor: "#fff",
                            hoverBorderColor: "#fff",
                            colorError: "#fff",
                        },
                    },
                }}
            >
            <Form
                name="normal_login"
                onFinish={send}
                layout="vertical"
                ref={formRef}
            >
                <Form.Item
                    name="identifier"
                >
                    <Input
                        size="middle"
                        placeholder="Escribe un mensaje"
                        autoComplete="off"
                        autoFocus={true}
                    />
                </Form.Item>
            </Form>
            </ConfigProvider>
        </div>
    );
};

export default Chat;
