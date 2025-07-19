import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
    }
  return (
    <header>
        <div className = "container">
            <div className="grid navbar-grid">
                <div className="logo">
                    <h1>SchemeSeeker</h1>

                </div>
                <nav className={showMenu ? "menu-mobile" : "menu-web" }>
                    <ul>
                        <li>
                            <a href=''>Home</a>
                        </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="#">Schemes</a>
                    </li>
                <li>
                    <a href="#">Language</a>
                </li>
                        
                    </ul>
                </nav>

                 <div className="auth-buttons">
                  
                  <Link to="/signup" className="nav-btn nav-btn-outline">Sign Up</Link>
                 </div>
               
                <div className="ham-menu">
                    <button onClick = {handleButtonToggle} >
                        <GiHamburgerMenu />
                    </button>
                </div>

            </div>

        </div>
    </header>
  )
}

export default Navbar
