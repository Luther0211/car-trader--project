import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

    return (
        <nav className="Navbar navbar bg-info">
            <div className="container">
                <Link to="/" className="Navbar__main-link navbar-brand p-0">Auto Listings</Link>
                <a href="#2" className="Navbar__user-link position-relative">
                    <i className="fas fa-user-circle"></i>
                    <span className="Navbar__user-number badge badge-pill position-absolute">12</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar