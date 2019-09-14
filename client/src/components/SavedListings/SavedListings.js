import React from 'react'
import './SavedListings.scss'

import ResItem from '../ResItem/ResItem'

const SavedListings = ({ saved, saveToLocal, removeFromLocal }) => {

    let listingsResult = saved.length > 0 
        ? (
            <div>
                <h3 className='py-4'>Your Saved listings!</h3>
                {saved.map(listing => <ResItem key={listing.id} data={listing} saveToLocal={saveToLocal} removeFromLocal={removeFromLocal} />)}
            </div>
        )
        : (
            <div>
                <h3 className='py-4'>You have not saved any listings</h3>
                <p>Search & save listings to view them here!</p>
            </div>
        )

    return (
        <div className='SavedListings container text-center'>
            { listingsResult }
        </div>
    )
}


export default SavedListings