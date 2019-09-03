import React from 'react';
import './Navbar.css'

const Navbar = () => {

    return (
        <nav className="Navbar navbar bg-info">
            <div className="container">
                <a href="#" class="Navbar__main-link navbar-brand p-0">Car Trader</a>
                <a href="#" class="Navbar__user-link position-relative">
                    <i class="fas fa-user-circle"></i>
                </a>
            </div>
        </nav>
    )
}

export default Navbar