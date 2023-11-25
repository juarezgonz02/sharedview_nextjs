import React from 'react';
import Image from 'next/image';
import BadCodeIMG from '../../../public/400 Error Bad Request-bro.png';


const Page = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 min-h-screen'>
            <Image src={BadCodeIMG} width={400} height={400} alt="logo" />
            <span className="text-2xl font-bold">
                No Room Access
            </span>
            <span className="text-base">
                You aren´t invited to this room
            </span>
        </div>
    );
}

export default Page;
