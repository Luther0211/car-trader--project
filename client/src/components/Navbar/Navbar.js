import React from 'react';
import './Navbar.scss'

const Navbar = () => {

    return (
        <nav className="Navbar navbar bg-info shadow-lg">
            <div className="container">
                <a href="#1" className="Navbar__main-link navbar-brand p-0">Car Trader</a>
                <a href="#2" className="Navbar__user-link position-relative">
                    <i className="fas fa-user-circle"></i>
                    <span className="Navbar__user-number badge badge-pill position-absolute">12</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar