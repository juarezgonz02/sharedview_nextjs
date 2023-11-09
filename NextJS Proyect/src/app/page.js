import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import React from 'react';

const Page = () => {
    return (
        <div className='flex min-h-screen flex-col px-8'>
            <Navbar />
            <Banner />
        </div>
    );
};

export default Page;