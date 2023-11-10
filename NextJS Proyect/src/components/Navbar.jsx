'use client';
import { useEffect, useState} from 'react';
import Image from 'next/image';
import LogoSharedView from '../../public/ICONO.png';

const Navbar = ({isLogged}) => {

    const [date, setDate] = useState('');

    const getDate = () => {
        const date = new Date();
        const day = date.toDateString();
        const hour = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') + ':' + date.getSeconds().toString().padStart(2, '0');
        return setDate(`${hour} - ${day}`);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getDate();
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="flex flex-row items-center py-4">
            <div className='w-1/2 flex justify-start items-center gap-4'>
                <Image src={LogoSharedView} width={60} height={60} alt='logo'/>
                <div className='flex flex-row'>
                    <span className='text-purple font-bold text-lg'>Shared</span>
                    <span className='font-bold text-lg'>View</span>
                </div>
            </div>
            <div className='w-1/2 flex flex-row items-center justify-end gap-4'>
                <span className='text-gray-400 text-sm'>{date}</span>
                {
                    isLogged ?
                    <span className='text-white font-bold'>Victor Cortez</span>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default Navbar;