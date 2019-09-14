import React from 'react'
import './Listing.scss'

const Listing = () => {
    const listingId = window.location.pathname.replace('/listing/', '')


    return (
        <div className="Listing container">
            Listing Component
            { listingId }
        </div>
    )
}

export default Listing