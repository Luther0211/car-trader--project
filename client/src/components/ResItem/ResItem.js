import React from 'react'
import './ResItem.scss'


const ResItem = ({ data }) => {
    let main_photo = 'https://www.texastechnologies.com/wp-content/uploads/2016/10/product_i_m_img_not_available_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1.png'

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

                <div className='col-8 col-lg-7 p-0'>
                    <h6 className="text-center text-light bg-info py-1">{data.heading}</h6>
                    
                    <div className='px-3'>
                        <h5 className="d-flex justify-content-between m-0 mb-lg-4 mt-lg-2">
                            <span>{data.miles ? `${(data.miles).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.00','')} Miles` : ' '}</span>
                            <span>{data.price ? `$${(data.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}` : 'Ask for Price'}</span>
                        </h5>

                        {data.exterior_color ? <p className='m-0'><strong>Color:</strong> {data.exterior_color}</p> : ''}
                        {data.build.transmission ? <p className='m-0'><strong>Transmission:</strong> {data.build.transmission}</p> : ''}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResItem