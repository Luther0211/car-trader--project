import React from 'react'
import './ResItem.scss'


const ResItem = ({ data }) => {
    let main_photo = 'https://us.123rf.com/450wm/sldesign1/sldesign11404/sldesign1140400019/27904941-stock-vector-car-outline-vector-illustration-.jpg?ver=6'

    if(data.media.photo_links[0]) main_photo = data.media.photo_links[0]

    return (
        <div className='ResItem container-fluid mb-4 bg-white shadow-sm'>
            <div className='row'>
                <div className='col-4 col-lg-5 p-0'>
                    <img 
                        src={main_photo} 
                        className='img-fluid'
                        alt='car listing'
                    />

                </div>

                <div className='col-8 col-lg-7'>
                    <h6>{data.heading}</h6>
                    <h5 className="text-right">${data.price}</h5>

                    <p>{data.miles} Miles</p>
                    <p>
                    {data.exterior_color ? `Color: ${data.exterior_color}` : ''}
                    {data.build.transmission ? ` - Transmission: ${data.build.transmission}` : ''}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ResItem