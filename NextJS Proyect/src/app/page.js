import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import React from 'react';

const Page = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='flex flex-1 justify-between '>
                <Banner />
            </div>
        </div>
    );
};

export default Page;