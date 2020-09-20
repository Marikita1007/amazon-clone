import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/">
                <img  
                    className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="" 
                />
            </Link>
            {/* Search box */}
            input.header__seach
            
            {/* 3 Links */}
            {/* Basket icon with number */}
        </nav>
    )
}

export default Header
