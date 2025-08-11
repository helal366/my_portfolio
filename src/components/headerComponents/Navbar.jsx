import React from 'react';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
    return (
        <section className="navbar bg-[#1f2632] padding border-b border-gray-300/50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavbarLinks/>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavbarLinks/>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn buttonOne">Resume</a>
            </div>
        </section>
    );
};

export default Navbar;