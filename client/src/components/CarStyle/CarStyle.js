import React from 'react'
import './CarStyle.scss'

const CarStyle = ({ onFormSubmit, carStyle, imgUrl }) => {

    const searchStyle = () => {
        const e = {
            preventDefault: () => console.log('preventDefault'),
            target: {
                name: 'bodyStyle',
                value: carStyle.toLowerCase()
            }
        }

        onFormSubmit(e)
    }

    return (
        <div className="CarStyle text-center d-inline-block col-12 col-sm-6 col-md-4" onClick={searchStyle} >
            <img className="img-fluid" src={imgUrl} alt={carStyle}/>
            <p>{ carStyle }</p>
        </div>
    )
}

export default CarStyle