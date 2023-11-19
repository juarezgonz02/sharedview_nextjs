import React from 'react';
import Image from 'next/image';
import BadCodeIMG from '../../../public/400 Error Bad Request-bro.png';


const Page = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 min-h-screen'>
            <Image src={BadCodeIMG} width={400} height={400} alt="logo" />
            <span className="text-2xl font-bold">
                Bad Code
            </span>
            <span className="text-base">
                Your code is not valid!
            </span>
        </div>
    );
}

export default Page;
