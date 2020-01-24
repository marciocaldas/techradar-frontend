import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

function DevMap (props, dev ) {

	const [center, setCenter] = useState({
		lat: -37.823414,
		lng: 144.917316
	});

	const [zoom, setZoom] = useState(14);

	return (
		<div className="map-container">
			<h1>{dev._id}</h1>
			<GoogleMapReact
				bootstrapURLKeys={{key: 'AIzaSyBejx8rwEb0CQoOf3p8ROevlWI-QNdIXqc' }}
				defaultCenter={center}
				defaultZoom={zoom}
			>
				<div className="marker" lat={props.lat} lng={props.lng}></div>
			</GoogleMapReact>
		</div>
	)
}

export default DevMap;