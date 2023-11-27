"use client";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { MessageOutlined } from "@ant-design/icons";


const NavbarCall = ({toggleChat}) => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };
    return( 
            <div className="w-full flex flex-row items-center gap-4 tablet:justify-between">
                <div className="flex flex-row items-center gap-4">
                <ArrowLeftOutlined style={{
                    fontSize: '20px',
                    color: '#fff',
                    cursor: 'pointer'
                
                }} onClick={goBack}/>
                <span className="text-white text-sm font-bold">Volver</span>
                </div>
                <div className="hidden tablet:flex tablet:flex-row tablet:items-center tablet:gap-1" onClick={toggleChat}>
                    <MessageOutlined />
                    <span className="text-white text-sm font-bold">Chat</span>
                </div>
            </div>
    );
};

export default NavbarCall;