import React, { useState, useEffect } from 'react'
import './Listing.scss'

const Listing = () => {
    const listingId = window.location.pathname.replace('/listing/', '')

    const [Listing, setListing] = useState({
        id: '',
        heading: '',
        price: 0,
        listing_url: '',
        dom: 0,
        condition: '',
        miles: 0,
        media: {
            photo_links: []
        },
        extra: {
            features: []
        },
        dealer: {
            id: '',
            website: '',
            name: '',
            street: '',
            city: '',
            state: '',
            country: '',
            latitude: '',
            longitude: '',
            zip: ''
        },
        build: {
            year: 0,
            make: '',
            model: '',
            trim: '',
            body_type: '',
            vehicle_type: '',
            transmisison: '',
            drivetrain: '',
            fuel_type: '',
            engine: '',
            engine_size: '',
            engine_block: '',
            doors: 0,
            cylinders: 0,
            made_in: '',
            steering_type: '',
            antibreak_sys: '',
            tank_size: '',
            overall_height:'',
            overall_length:'',
            overall_width:'',
            highway_miles: '',
            city_miles: ''
        }
    })

    useEffect(() => {
        if(Listing.id !== listingId) {
            fetch(`http://localhost:8080/api/listing/${listingId}`)
                .then(res => res.json())
                .then(res => {
                    const newListing = {...Listing}

                    console.log(res)


                })
            
        }

    })



    return (
        <div className="Listing container">
            Listing Component
            { listingId }
        </div>
    )
}

export default Listing