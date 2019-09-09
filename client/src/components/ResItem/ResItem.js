import React from 'react'
import './ResItem.scss'


const ResItem = ({ data }) => {
    return (
        <div className='ResItem container-fluid mb-4 bg-white shadow-sm'>
            <div className='row'>
                <div className='col-4 col-lg-5 p-0'>
                    <img src={'https://www.driving.co.uk/s3/st-driving-prod/uploads/2018/06/vw-polo.jpg'} className='img-fluid' alt='car listing' />
                </div>

                <div className='col-8 col-lg-7'>
                    <h3>Listing Title</h3>
                </div>

            </div>
        </div>
    )
}

export default ResItem