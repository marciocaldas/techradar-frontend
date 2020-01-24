import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import api from './services/api';
import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App(props) {
	const [devs, setDevs] = useState([]);
	const [zoom, setZoom] = useState(15);
	const [center, setCenter] = useState({
		lat: -37.823414,
		lng: 144.917316
	});

	async function handleAddDev(data) {
		const response = await api.post('/devs', data);
		setDevs([...devs, response.data]);
	}

	useEffect(() => {
		async function loadDevs() {
			const response = await api.get('/devs');
			setDevs(response.data);
			console.log(response.data)
		}

		loadDevs();
	}, []);

	return (
		<div id="app">
			<aside>
				<h1>Cadastro</h1>
				<DevForm onSubmit={handleAddDev}/>
			</aside>

			<main>
				{/* Dev List */}
				<h1>Tech Radar</h1>
				<ul>
					{devs.map(dev => (
						<DevItem
							key={dev._id}
							dev={dev}
						/>
					))}
				</ul>

				{/* Map */}
				<h1>Devs Location</h1>
				<div className="map-container">
					<GoogleMapReact
						bootstrapURLKeys={{key: 'AIzaSyBejx8rwEb0CQoOf3p8ROevlWI-QNdIXqc' }}
						defaultCenter={center}
						defaultZoom={zoom}
					>
						{devs.map(dev => (
							<img 
								key={dev._id}
								className="map-pin" 
								src={dev.avatar_url} 
								alt={dev.name} 
								lat={dev.location.coordinates[1]} 
								lng={dev.location.coordinates[0]} 
							/>
						))}
					</GoogleMapReact>
				</div>
			</main>
			
		</div>
	);
}

export default App;
