import React, { useState } from 'react';
import logo from '../images/Logo .svg'

const Nav = () => {
    const [menuOpen, setmenuOpen] = useState(false);

    const toggleMenu = () => {
        setmenuOpen(!menuOpen);
    }

    return (
        <Nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/' className='logo'>
                <img src={logo} alt='logo'></img>
            </a>
            {/* mobile navbar */}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            {/* nav items */}
            <ul className={`nav-links ${menuOpen ? "visible" : "" }`} >
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Services</a>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/'>Reservation</a>
                </li>
                <li>
                    <a href='/'>Order Online</a>
                </li>
                <li>
                    <a href='/'>Login</a>
                </li>
            </ul>


        </Nav>
    );
};

export default Nav;