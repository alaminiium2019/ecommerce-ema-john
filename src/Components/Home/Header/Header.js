import React from 'react';
import Logo from '../../../images/logo.png';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt=""/>
        </div>
    );
};

export default Header;