import React from 'react';
import { Link } from 'react-router';

const NavbarLinks = () => {
    return (
        <>
            <li className='navLinks'><Link to='/'>Home</Link></li>
            <li className='navLinks'><a href='#skills'>Skills</a></li>
            <li className='navLinks'><a href='#education'>Education</a></li>
            <li className='navLinks'><a href='#projects'>Projects</a></li>
            <li className='navLinks'><a href='#contacts'>Contacts</a></li>
            <li className='navLinks'><a href='#aboutme'>About Me</a></li>
        </>
    );
};

export default NavbarLinks;