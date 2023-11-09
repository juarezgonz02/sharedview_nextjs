import { Button, ConfigProvider } from 'antd';
import Image from 'next/image';
import LogoSharedView from '../../public/ICONO.png';

const Navbar = () => {

    const getDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        return `${hour}:${minutes} - ${day}/${month}/${year}`;
    }

    return(
        <div className="flex flex-row items-center px-8 py-4">
            <div className='w-1/2 flex justify-start items-center gap-4'>
                <Image src={LogoSharedView} width={60} height={60} />
                <div className='flex flex-row gap-1'>
                    <span className='text-violet-700 font-bold text-lg'>Shared</span>
                    <span className='font-bold text-lg'>View</span>
                </div>
            </div>
            <div className='w-1/2 flex flex-row items-center justify-end gap-4'>
                <span className='text-gray-400 text-sm'>{getDate()}</span>
                <ConfigProvider
                            theme={{
                                token:{
                                    colorText: "#811cb7",
                                    colorBorder: "#811cb7",
                                    colorBgTextHover: "#fff",
                                    colorPrimary: "#fff",
                                }
                            }}
                >
                <Button>Login</Button>
                </ConfigProvider>
            </div>
        </div>
    )
}

export default Navbar;