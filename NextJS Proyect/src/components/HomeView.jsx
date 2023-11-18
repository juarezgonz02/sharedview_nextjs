import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import LoginBannerIMG from '../../public/Voice chat-bro.png';
import { VideoCameraAddOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Button, Input, ConfigProvider, Tooltip, Modal } from 'antd';
import CreateRoomForm from './CreateRoomForm';
import RoomsList from './RoomsList';

const Header = () => {
    return (
        <div className="flex flex-col gap-2 tablet:items-center tablet:justify-center">
            <div className="text-white phone:text-start">
                <span className="text-purple text-4xl font-bold tablet:text-3xl">Shared</span>
                <span className="text-4xl font-bold tablet:text-3xl">View</span>
            </div>
            <p className="text-base text-gray-400 tablet:text-sm phone:text-center">
                Crea una sala y comparte el codigo con tus amigos
            </p>
        </div>
    )
}

const Controls = ({ isModalOpen, setIsModalOpen, createRoom }) => {
    const [button, setButton] = useState(false);

    const onChange = (e) => {
        if (e.target.value === "") {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = (formRef) => {
        formRef.current?.resetFields();
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-wrap-reverse gap-4 tablet:flex-row tablet:items-center tablet:justify-center">
            <ConfigProvider
                theme={{
                    components: {
                        Button: {
                            colorBgTextHover: "#fff",
                            colorPrimaryHover: "#fff",
                            colorTextDisabled: "rgba(255, 255, 255, 0.5)",
                            colorBgContainerDisabled: "rgba(127, 25, 180, 0.5))",
                            colorPrimaryActive: "#fff",
                        },
                        Modal: {
                            contentBg: "#121212",
                            headerBg: "#121212",
                            titleColor: "#fff",
                        },
                    },
                }}
            >
                <Button
                    size="large"
                    disabled={createRoom}
                    className="bg-purple hover:bg-violet-900 text-white border-none phone:w-full"
                    icon={<VideoCameraAddOutlined />}
                    onClick={showModal}
                >
                    Crear sala
                </Button>
                <Modal title="Crear una sala" open={isModalOpen} footer={null} closeIcon={false}>
                    <CreateRoomForm handleOk={handleOk} handleCancel={handleCancel} />
                </Modal>
            </ConfigProvider>
            <div className="flex flex-row items-center gap-4 tablet:gap-2 phone:w-full">
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                colorText: "#fff",
                                colorTextDisabled: "rgba(255, 255, 255, 0.5)",
                            },
                            Input: {
                                activeBorderColor: "#1e1e1e",
                                hoverBorderColor: "#1e1e1e",
                            },
                        },
                    }}
                >
                    <Input
                        size="large"
                        placeholder="Ingresa el codigo de la reunion"
                        onChange={onChange}
                        allowClear
                        suffix={
                            <Tooltip title="Example: xac-1a3-vds">
                                <InfoCircleOutlined
                                    style={{
                                        color: "rgba(0,0,0,.45)",
                                    }}
                                />
                            </Tooltip>
                        }
                    />

                    <Button type="text" size="large" disabled={!button}>
                        Unirse
                    </Button>
                </ConfigProvider>
            </div>
        </div>
    )
}


const ImageHome = () => {
    return (
        <Image src={LoginBannerIMG} width={500} height={500} alt="img" className="phone:h-60 phone:w-60" />
    )
}

const Rooms = ({ rooms }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [createRoom, setCreateRoom] = useState(false);

    useEffect(() => {
        if (rooms.length >= 3) {
            setCreateRoom(true);
        }
    }, [rooms])

    return (
        <>
            <Controls isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} createRoom={createRoom} />
            <RoomsList rooms={rooms} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </>
    )
}

const HomeView = ({rooms}) => {
    return (
        <div className="flex flex-row items-center justify-evenly px-8 w-full phone:flex-col-reverse phone:justify-center">
            <div className="w-1/2 flex flex-col gap-8 tablet:w-full">
                <Header  />
                <Rooms rooms={rooms} />
            </div>
            <div className="flex flex-col">
                <ImageHome />
            </div>
        </div>
    );
}

export default HomeView;
