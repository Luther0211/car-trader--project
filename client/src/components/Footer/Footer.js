import React from 'react'
import './Footer.scss'

const Footer = () => (
    <div className="Footer bg-dark text-center text-light mt-5 py-5">
        <div className="container my-3 px-5">

            <span className="Footer__follow mx-4">Follow</span>
            
            <a className="mx-1 mx-sm-2 mx-md-4" href="https://facebook.com">
                <i className="fab fa-facebook-square"></i>
            </a>

            <a className="mx-1 mx-sm-2 mx-md-4" href="https://twitter.com">
                <i className="fab fa-twitter"></i>
            </a>

            <a className="mx-1 mx-sm-2 mx-md-4" href="https://youtube.com">
                <i className="fab fa-youtube"></i>
            </a>
            
        </div>
    </div>
)

export default Footer