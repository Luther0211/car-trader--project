import React from 'react';
import './CarStyle.scss';

const CarStyle = ({ carStyleSearch, carStyle, imgUrl }) => {
	return (
		<div className="CarStyle text-center d-inline-block col-12 col-sm-6 col-md-4">
			<img className="img-fluid" src={imgUrl} alt={carStyle} name={carStyle} onClick={(e) => carStyleSearch(e)} />
			<p>{carStyle}</p>
		</div>
	);
};

export default CarStyle;
