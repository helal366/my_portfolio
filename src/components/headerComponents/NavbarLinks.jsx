import React from 'react';
import { Link } from 'react-router';

const NavbarLinks = () => {
    return (
        <>
            <li><Link to='/'>Home</Link></li>
            <li>
                <a href='#about'>About</a>
            </li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#education'>Education</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contacts'>Contacts</a></li>
        </>
    );
};

export default NavbarLinks;