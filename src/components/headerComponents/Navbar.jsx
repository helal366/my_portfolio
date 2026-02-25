import React from 'react';
import NavbarLinks from './NavbarLinks';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
    const resume_file = `https://drive.google.com/uc?export=download&id=${import.meta.env.VITE_RESUME_FILE_ID}`
    return (
        <section className="navbar padding border-b-2 border-purple-300/40 backdrop-blur-lg bg-white/40">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <NavbarLinks />
                    </ul>
                </div>
                <div className=" text-xl flex justify-start">
                    <img
                        src="/logo2.png"
                        alt="Logo"
                        className="h-10 w-auto shadow-sm shadow-white rounded-md mr-5"
                    />

                    <div>
                        <input type="checkbox" value="dark" className="toggle theme-controller" />
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavbarLinks />
                </ul>
            </div>
            <div className="navbar-end">
                <a
                    href={resume_file}
                    download="Resume_of_Helal.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn buttonOne flex items-center gap-2 mb-10 md:mb-0"
                >
                    <FaDownload className="w-5 h-5" />
                    Download Resume
                </a>
            </div>
        </section>
    );
};

export default Navbar;