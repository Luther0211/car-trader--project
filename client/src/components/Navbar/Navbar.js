import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    const listings_saved = JSON.parse(window.localStorage.getItem('car_listings'))
    let listingIcon = ''
    if(listings_saved && listings_saved.length > 0) listingIcon = <span className="Navbar__user-number badge badge-pill position-absolute">{listings_saved.length}</span>

    return (
        <nav className="Navbar navbar bg-info">
            <div className="container">
                <Link to="/" className="Navbar__main-link navbar-brand p-0">Auto Listings</Link>
                <a href="#2" className="Navbar__user-link position-relative">
                    <i className="fas fa-user-circle"></i>
                    {
                        listingIcon
                    }
                </a>
            </div>
        </nav>
    )
}

export default Navbar