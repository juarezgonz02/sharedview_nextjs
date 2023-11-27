"use client";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";


const NavbarCall = () => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };
    return( 
            <div className="w-full flex flex-row items-center gap-4">
                <ArrowLeftOutlined style={{
                    fontSize: '20px',
                    color: '#fff',
                    cursor: 'pointer'
                
                }} onClick={goBack}/>
                <span className="text-white text-sm font-bold">Volver</span>
            </div>
    );
};

export default NavbarCall;