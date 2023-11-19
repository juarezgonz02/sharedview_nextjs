import React from 'react';
import ExpiredIMG from '../../../public/Time management-rafiki.png';
import Image from 'next/image';

const Page = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-2 min-h-screen">
            <Image src={ExpiredIMG} width={400} height={400} alt="logo" />
            <span className="text-2xl font-bold">
                Room Expired
            </span>
            <span className="text-base">
                Your room has been closed due to inactivity.
            </span>
        </div>
    );
}

export default Page;
