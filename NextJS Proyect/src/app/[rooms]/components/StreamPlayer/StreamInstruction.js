import React, { useEffect, useState } from "react";
import { Button, ConfigProvider, Tag } from "antd";
import Cookies from "js-cookie";
import Image from "next/image";
import InstructionsIMG from "../../../../../public/Questions-bro.png";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import NavbarCall from "./NavbarCall";

const StreamInstruction = ({ isLoaded }) => {
    const mediaUrl = "rtmp://media.sharedview.live:1935/live/";
    const signKey = `${document.location.pathname.substring(
        1
    )}?sign=${Cookies.get("room-exp")}-${Cookies.get(
        "sign"
    )}&expiration=${Cookies.get("room-exp")}`;
    const copy = async (txt) => {
        try {
            await navigator.clipboard.writeText(txt);
            console.log("Page URL copied to clipboard");
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    const [visibilityClass, setVisibilityClass] = useState(
        "overflow-hidden flex visible justify-center flex-col items-center gap-2"
    );
    useEffect(() => {
        if (isLoaded) {
            setVisibilityClass("hidden");
        }
    }, [isLoaded]);

    return (
        <div className={visibilityClass}>
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
                        Tag: {
                            defaultBg: "#1e1e1e",
                            defaultColor: "#fff",
                            marginXS: "0.2rem",
                        },
                    },
                }}
            >
                <NavbarCall />
                <Image
                    width={150}
                    height={150}
                    src={InstructionsIMG}
                    alt={"sharedview img"}
                />
                <div className="flex flex-row gap-2">
                    <h2 className="text-lg font-bold text-white">
                        Como transmitir en vivo
                    </h2>
                    <Tooltip
                        placement="top"
                        title="Puedes usar OBS, XSplit, Streamlabs OBS, o cualquier otro software de streaming"
                    >
                        <QuestionCircleOutlined
                            style={{
                                color: "white",
                                fontSize: "1.2rem",
                            }}
                        />
                    </Tooltip>
                </div>
                <p className="text-white text-center text-sm">
                    1. En el software de streaming, selecciona la opción de RTMP como tipo
                    de servidor y coloca la siguiente URL como servidor:
                </p>
                <p className="text-white text-center text-sm">
                    2. En el lugar de la URL:
                </p>
                <p className="w-fit flex flex-row gap-2">
                    <Tag>{`${mediaUrl}  `}</Tag>
                    <button
                        className="text-white text-sm font-bold"
                        onClick={() => copy(mediaUrl)}
                    >
                        Copiar
                    </button>
                </p>
                <p className="w-fit text-sm">
                    3. En el steam usa la siguiente llave de transmisión:
                </p>
                <p className="w-fit flex flex-row gap-2">
                    <Tag>{`${signKey}  `}</Tag>
                    <button
                        className="text-white text-sm font-bold"
                        onClick={() => copy(signKey)}
                    >
                        Copiar
                    </button>
                </p>
                <p className="w-fit text-sm">
                    4. ¡Listo!, recarga la página para ver tu transmisión en vivo.
                </p>
                <p>
                    <br />
                    <Button onClick={() => window.location.reload()} className="bg-purple hover:bg-violet-900 text-white border-none phone:w-full">
                        Recargar
                    </Button>
                </p>
            </ConfigProvider>
        </div>
    );
};

export default StreamInstruction;
