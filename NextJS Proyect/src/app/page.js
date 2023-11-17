"use client";
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import React from 'react';
import { useState } from 'react';

const roomsList = [
    {
        id: 1,
        expDate: '12/12/2021',
        code: 'xac-1a3-vds',
        isPrivate: true,
    },
    {
        id: 2,
        expDate: '12/12/2021',
        code: 'xac-1a3-vds',
        isPrivate: true,
    },
    {
        id: 3,
        expDate: '12/12/2021',
        code: 'xac-1a3-vds',
        isPrivate: true,
    },
]

const Page = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [rooms, setRooms] = useState(roomsList)

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar isLogged={isLogged} />
            <div className='flex flex-1 justify-between'>
                <Banner isLogged={isLogged} rooms={rooms} />
            </div>
        </div>
    );
};

export default Page;