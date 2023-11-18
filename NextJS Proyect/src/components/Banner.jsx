import Image from "next/image";
import BannerIMG from "../../public/Video call-rafiki.png";
import { LoginOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import Link from "next/link";

const HeaderContent = () => {
    return (
        <div className="flex flex-col gap-8 tablet:items-center tablet:justify-center">
            <div className="text-white tablet:text-center phone:text-center">
                <span className="text-purple text-4xl font-bold tablet:text-3xl">Shared</span>
                <span className="text-4xl font-bold tablet:text-3xl">View : Conecta y Comparte de Forma Segura </span>
            </div>
            <p className="text-base text-gray-400 tablet:text-sm tablet:text-center phone:text-sm phone:text-center">
                ¡Conéctate y comparte tu pantalla de forma segura con tus amigos! ¡Experimenta una comunicación visual sin límites!
            </p>
        </div>
    )
}

const BannerControls = () => {
    return (
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
                <Link href="/registration">
                    <span className="text-purple font-bold ">Registrate</span>
                </Link>
            </div>
        </div>
    )
}


const ImagesBanner = () => {
    return (
        <Image src={BannerIMG} width={500} height={500} alt="img" className="phone:h-60 phone:w-60" />
    )
}



const Banner = () => {
    return (
        <div className="flex flex-row items-center justify-evenly px-8 w-full phone:flex-col-reverse phone:justify-center">
            <div className="w-1/2 flex flex-col gap-8 tablet:w-full">
                <HeaderContent />
                <BannerControls/>
            </div>
            <div className="flex flex-col">
                <ImagesBanner />
            </div>
        </div>
    );
};

export default Banner;
