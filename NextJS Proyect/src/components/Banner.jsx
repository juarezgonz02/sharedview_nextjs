"use client";
import { useState } from "react";
import Image from "next/image";
import BannerIMG from "../../public/Video call-rafiki.png";
import { VideoCameraAddOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Button, Input, ConfigProvider, Tooltip } from "antd";

const Banner = () => {
    const [button, setButton] = useState(false);

    const onChange = (e) => {
        if (e.target.value === "") {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    return (
        <div className="flex flex-row items-center">
            <div className="w-1/2 flex flex-col justify-center items-start pl-8">
                <div className="flex flex-col gap-4">
                    <div className="text-white">
                        <span className="text-purple text-4xl font-bold">Shared</span>
                        <span className="text-4xl font-bold">
                            View : Conecta y Comparte de Forma Segura
                        </span>
                    </div>
                    <p className="text-lg text-gray-500">
                        ¡Conéctate y comparte tu pantalla de forma segura con tus amigos!
                        ¡Experimenta una comunicación visual sin límites!
                    </p>
                </div>
                <div className="flex flex-row mt-14 gap-4">
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    colorBgTextHover: "#fff",
                                    colorPrimaryHover: "#fff",
                                    colorTextDisabled: "rgba(255, 255, 255, 0.5)",
                                },
                            },
                        }}
                    >
                        <Button
                            size="large"
                            className="bg-purple hover:bg-violet-900 text-white border-none gap-2"
                            icon={<VideoCameraAddOutlined />}
                        >
                            Nueva reunion
                        </Button>
                    </ConfigProvider>
                    <div className="flex flex-row items-center gap-4">
                        <Input
                            placeholder="Ingresa el codigo de la reunion"
                            size="large"
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
                        <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        colorText: "#fff",
                                        colorTextDisabled: "rgba(255, 255, 255, 0.5)",
                                    },
                                },
                            }}
                        >
                            <Button type="text" size="large" disabled={!button}>
                                Unirse
                            </Button>
                        </ConfigProvider>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-end pr-8">
                <Image src={BannerIMG} width={500} height={500} />
            </div>
        </div>
    );
};

export default Banner;
