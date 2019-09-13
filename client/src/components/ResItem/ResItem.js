import React from 'react'
import './ResItem.scss'


const ResItem = ({ data, saveToLocal, removeFromLocal }) => {
    let main_photo = 'https://www.texastechnologies.com/wp-content/uploads/2016/10/product_i_m_img_not_available_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1.png'
    const saved_list = JSON.parse(window.localStorage.getItem('car_listings'))
    let isSaved = false

    if(saved_list) isSaved = saved_list.find(elem => elem === data.id) ? true : false
    

    let detail_list = []
    if(data.build && data.build.year) {
        detail_list.push(<span key="details-year">{data.build.year}</span>)
        detail_list.push(<span key='point1' name='detailPoint'>•</span>)
    }
    if(data.miles) {
        detail_list.push(<span key='details-miles'>{(data.miles).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.00','')} miles</span>)
        detail_list.push(<span key='point2' name='detailPoint'>•</span>)
    }
    if(data.build && data.build.fuel_type) {
        detail_list.push(<span key='details-fuel'>{data.build.fuel_type.replace('Unleaded', '')}</span>)
        detail_list.push(<span key='point3' name='detailPoint'>•</span>)
    }
    if(data.build && data.build.transmission) {
        detail_list.push(<span key='details-trans'>{data.build.transmission.replace('Automated', '')}</span>)
    }

    if(detail_list[detail_list.length - 1].name === 'detailPoint') detail_list.pop()
    
    if(data.media.photo_links[0]) main_photo = data.media.photo_links[0]




    return (
        <div className='ResItem container-fluid position-relative mb-4 bg-white shadow-sm p-0'>
            <h6 className="text-light bg-info py-1 px-2 m-0">{data.heading}</h6>

            <div className='row'>
                
                <div className='col-4 col-lg-5'>
                    <img 
                        src={main_photo} 
                        className='img-fluid'
                        alt='car listing'
                    />
                </div>

                <div className='col-8 col-lg-7 pl-0 pr-4'>
                    <h5 className="d-flex justify-content-between m-0 my-lg-3 py-1 pb-lg-3 border-bottom">
                        <span>{data.price ? `$${(data.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}` : 'Ask for Price'}</span>
                        <span className='ResItem__save-icon'>
                        { 
                            isSaved
                                ? <i className="fas fa-heart text-danger"  onClick={() => removeFromLocal(data.id)}/>
                                : <i className="far fa-heart text-info"  onClick={() => saveToLocal(data.id)}/>        
                        }
                        </span>
                    </h5>

                    <div className='ResItem__details p-0 p-md-1 p-lg-2 mt-1 mt-lg-3 mt-xl-4 d-flex justify-content-between'>
                        { detail_list }
                    </div>
                </div>
                    

                <button className='ResItem__view-btn d-none d-sm-block position-absolute btn btn-sm btn-info'>View</button>
                <a className="ResItem__view-link d-sm-none position-absolute text-info border-bottom border-info">View</a>

            </div>
        </div>
    )
}

export default ResItem