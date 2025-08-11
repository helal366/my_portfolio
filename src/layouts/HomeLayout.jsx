import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/headerComponents/Navbar';

const HomeLayout = () => {
    return (
        <section>
            <Navbar/>
           <Outlet/>
        </section>
    );
};

export default HomeLayout;