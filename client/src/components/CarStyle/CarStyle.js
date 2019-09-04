import React from 'react'
import './CarStyle.scss'

const CarStyle = ({ carStyle, imgUrl }) => (
    <div className="CarStyle text-center d-inline-block col-12 col-sm-6 col-md-4">
        <a href={`#${carStyle}`}>
            <img className="img-fluid" src={imgUrl} alt={carStyle}/>
            <p>{ carStyle }</p>
        </a>
    </div>
)

export default CarStyle