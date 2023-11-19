import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import React from 'react';


// const decodedJWT = (token) => {
//     const base64Url = token.split('.')[1];
//     const base64 = base64Url.replace('-', '+').replace('_', '/');
//     const decoded = JSON.parse(window.atob(base64));
//     return decoded;
// };

const Page = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex flex-1 justify-between '>
                <Banner />
            </div>
        </div>
    );
};

export default Page;