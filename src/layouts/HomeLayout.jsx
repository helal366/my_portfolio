import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/headerComponents/Navbar';

const HomeLayout = () => {
    return (
        <section className='bg-gradient-to-br from-pink-500 to-blue-600 text-white'>
            <section className='sticky top-0 z-50'>
                <Navbar />
            </section>
            <Outlet />
        </section>
    );
};

export default HomeLayout;