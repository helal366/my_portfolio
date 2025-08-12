import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/headerComponents/Navbar';

const HomeLayout = () => {
    return (
        <section>
            <section className='sticky top-0 bg-white z-50'>
                <Navbar />
            </section>
            <Outlet />
        </section>
    );
};

export default HomeLayout;