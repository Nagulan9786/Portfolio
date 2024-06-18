import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">Nagulan Chenniyappan</a>
            </div>
            <div className={`navbar-nav ${isOpen ? 'active' : ''}`}>
                <li className="nav-item"><a href="#about">About</a></li>
                <li className="nav-item"><a href="#skills">Skills</a></li>
                <li className="nav-item"><a href="#projects">Projects</a></li>
                <li className="nav-item"><a href="#implantraining">Implantraining</a></li>
                <li className="nav-item"><a href="#contact">Contact</a></li>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default Navbar;
