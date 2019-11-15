import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const Map = ({ lat, lng }) => {
	return (
		<GoogleMap defaultZoom={15} defaultCenter={{ lat, lng }}>
			<Marker position={{ lat, lng }} />
		</GoogleMap>
	);
};

const wrappedMap = withScriptjs(withGoogleMap(Map));

export default wrappedMap;
