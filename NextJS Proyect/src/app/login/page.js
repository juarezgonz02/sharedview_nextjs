import LoginForm from '@/components/LoginForm';
import Image from 'next/image';
import React from 'react';
import LoginIMG from '../../../public/Login-amico.png';
import Navbar from '@/components/Navbar';

const Page = () => {
    return (
        <div className='flex flex-col px-8'>
            <Navbar />
            <div className='flex flex-row items-center gap-8 justify-evenly mt-10'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-white font-bold text-2xl'>Login</span>
                        <span className='text-base'>Doesn't have an account? <a href="" className='text-purple underline hover:text-purple-500'>Register now!</a></span>
                    </div>
                    <LoginForm />
                </div>
                <div className='flex flex-col'>
                    <Image src={LoginIMG} width={500} height={500} alt='logo' />
                </div>
            </div>
        </div>
    );
};

export default Page;