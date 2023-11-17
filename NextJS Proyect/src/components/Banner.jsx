"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import BannerIMG from "../../public/Video call-rafiki.png";
import LoginBannerIMG from "../../public/Voice chat-bro.png";
import { VideoCameraAddOutlined, LoginOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Button, Input, ConfigProvider, Tooltip, Modal } from "antd";
import CreateRoomForm from "./CreateRoomForm";
import RoomsList from "./RoomsList";
import Link from "next/link";

const HeaderContent = ({ isLogged }) => {
    return (
        <>
            {
                isLogged ?
                    <div className="flex flex-col gap-2 tablet:items-center tablet:justify-center">
                        <div className="text-white phone:text-start">
                            <span className="text-purple text-4xl font-bold tablet:text-3xl">Shared</span>
                            <span className="text-4xl font-bold tablet:text-3xl">View</span>
                        </div>
                        <p className="text-base text-gray-400 tablet:text-sm phone:text-center">
                            Crea una sala y comparte el codigo con tus amigos
                        </p>
                    </div>
                    :
                    <div className="flex flex-col gap-8 tablet:items-center tablet:justify-center">
                        <div className="text-white tablet:text-center phone:text-center">
                            <span className="text-purple text-4xl font-bold tablet:text-3xl">Shared</span>
                            <span className="text-4xl font-bold tablet:text-3xl">View : Conecta y Comparte de Forma Segura </span>
                        </div>
                        <p className="text-base text-gray-400 tablet:text-sm tablet:text-center phone:text-sm phone:text-center">
                            ¡Conéctate y comparte tu pantalla de forma segura con tus amigos! ¡Experimenta una comunicación visual sin límites!
                        </p>
                    </div>
            }
        </>
    )
}

const BannerControls = ({ isLogged, isModalOpen, setIsModalOpen, createRoom }) => {
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
        <>
            {
                isLogged ?
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
                                    Form: {
                                        labelColor: "#fff",
                                    },
                                    Input: {
                                        colorBgContainer: "#1e1e1e",
                                        colorBorder: "#1e1e1e",
                                        colorText: "#fff",
                                        colorTextPlaceholder: "rgba(255, 255, 255, 0.4)",
                                        activeBorderColor: "#fff",
                                        hoverBorderColor: "#fff",
                                        paddingInline: "0.5rem",
                                    },
                                    Select: {
                                        colorBorder: "#1e1e1e",
                                        colorTextPlaceholder: "rgba(255, 255, 255, 0.4)",
                                        colorBgContainer: "#1e1e1e",
                                        optionSelectedBg: "#1e1e1e",
                                        optionSelectedColor: "#fff",
                                        colorBgElevated: "#1e1e1e",
                                        colorText: "#fff",
                                        colorPrimaryHover: "#fff",
                                        colorPrimary: "#fff",
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
                    :
                    <div className="flex flex-col tablet:items-center gap-8">
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
                                },
                            }}
                        >
                            <Link href="/login">
                                <Button
                                    size="large"
                                    className="bg-purple hover:bg-violet-900 text-white border-none w-1/2 tablet:w-full phone:w-full"
                                    icon={<LoginOutlined />}
                                >
                                    Iniciar sesion
                                </Button>
                            </Link>
                        </ConfigProvider>
                        <div className="flex flex-row items-center justify-start tablet:justify-center gap-2">
                            <span className="text-white text-sm">
                                ¿No tienes una cuenta?
                            </span>
                            <span className="text-purple font-bold ">Registrate</span>
                        </div>
                    </div>
            }
        </>
    )
}

const Rooms = ({ isLogged, rooms }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [createRoom, setCreateRoom] = useState(false);

    useEffect(() => {
        if (rooms.length >= 3) {
            setCreateRoom(true);
        }
    }, [rooms])

    return (
        <>
            <BannerControls isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isLogged={isLogged} createRoom={createRoom} />
            {
                isLogged ?
                    <RoomsList rooms={rooms} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
                    :
                    null
            }
        </>
    )
}

const ImagesBanner = ({ isLogged }) => {
    return (
        <>
            {
                isLogged ?
                    <Image src={LoginBannerIMG} width={500} height={500} alt="img" className="phone:h-60 phone:w-60" />
                    :
                    <Image src={BannerIMG} width={500} height={500} alt="img" className="phone:h-60 phone:w-60" />
            }
        </>
    )
}



const Banner = ({ isLogged, rooms }) => {
    return (
        <div className="flex flex-row items-center justify-evenly px-8 w-full">
            <div className="w-1/2 flex flex-col gap-8 tablet:w-full">
                <HeaderContent isLogged={isLogged} />
                <Rooms isLogged={isLogged} rooms={rooms} />
            </div>
            <div className="flex flex-col tablet:hidden phone:hidden">
                <ImagesBanner isLogged={isLogged} />
            </div>
        </div>
    );
};

export default Banner;
