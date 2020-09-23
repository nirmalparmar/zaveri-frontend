import React from 'react';
import './navbar.css';

const Navbar = () => (
    <div className="navbar">
        <div className="left-items">
            <div>
                Zaveri Kart
            </div>
        </div>
        <div className="right-items">
            <div className="item">Sign in</div>
            <div className="item">Sign up</div>
        </div>
    </div>
)

export default Navbar;