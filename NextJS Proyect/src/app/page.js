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
]

const decodedJWT = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const decoded = JSON.parse(window.atob(base64));
    return decoded;
};

const Page = () => {
    const [rooms, setRooms] = useState(roomsList)
    const token = localStorage.getItem('token');
    const isLogged = token ? true : false;
    const username = isLogged ? decodedJWT(token).username : null;

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar isLogged={isLogged} username={username} />
            <div className='flex flex-1 justify-between '>
                <Banner isLogged={isLogged} rooms={rooms} />
            </div>
        </div>
    );
};

export default Page;