'use client';
import { Button, ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import Image from 'next/image';
import LogoSharedView from '../../public/ICONO.png';

const Navbar = () => {

    const [isLogged, setIsLogged] = useState(true);

    const getDate = () => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        return `${hour}:${minutes} - ${day}/${month}/${year}`;
    }

    useEffect(() => {
        getDate();
    }, [])

    return (
        <div className="flex flex-row items-center py-4">
            <div className='w-1/2 flex justify-start items-center gap-4'>
                <Image src={LogoSharedView} width={60} height={60} />
                <div className='flex flex-row'>
                    <span className='text-purple font-bold text-lg'>Shared</span>
                    <span className='font-bold text-lg'>View</span>
                </div>
            </div>
            <div className='w-1/2 flex flex-row items-center justify-end gap-4'>
                <span className='text-gray-400 text-sm'>{getDate()}</span>
                {
                    isLogged ?
                        <span className='text-white text-base'>Victor Cortez</span>
                        :
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorBgTextHover: "#fff",
                                    colorPrimary: "#fff",
                                }
                            }}
                        >
                            <Button size='middle' type='default' icon={<UserOutlined />} className='bg-purple border-none text-white hover:bg-violet-900 hover:text-white'>Login</Button>
                        </ConfigProvider>
                }
            </div>
        </div>
    )
}

export default Navbar;