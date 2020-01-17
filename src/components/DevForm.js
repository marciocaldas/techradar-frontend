import React, {useEffect, useState } from 'react';

function DevForm({ onSubmit }) {

	const [github_username, setGitHubUserName ] = useState('');
	const [techs, setTechs] = useState('');
	const [latitude, setLatitude ] = useState('');
	const [longitude, setLongitude] = useState('');

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log(position);
				const {latitude, longitude } = position.coords;
				setLatitude(latitude);
				setLongitude(longitude);
			},
			(err) => {
				console.log(err);
			},
			{
				timeout: 30000,
			}
		)
	});

	async function handleSubmit(e) {
		e.preventDefault();
		await onSubmit({
			github_username,
			techs,
			longitude,
			latitude
		});

		setGitHubUserName('');
		setTechs('');

		console.log(github_username);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="input-block">
				<label htmlFor="">Usuário GitHub:</label>
				<input
					type="text"
					id="github_username"
					required
					value={github_username}
					onChange={e => setGitHubUserName(e.target.value)}/>
			</div>

			<div className="input-block">
				<label htmlFor="">Tecnologias:</label>
				<input
					type="text"
					id="techs"
					required
					value={techs}
					onChange={e => setTechs(e.target.value)}/>
			</div>

			<div className="input-group">
				<div className="input-block">
					<label htmlFor="">Latitude:</label>
					<input
						type="number"
						name="latitude"
						id="latitude"
						required
						value={latitude}
						onChange={e => setLatitude(e.target.value)}/>
				</div>

				<div className="input-block">
					<label htmlFor="">Longitude:</label>
					<input 
						type="number" 
						name="longitude" 
						id="longitude" 
						required
						value={longitude} 
						onChange={e => setLongitude(e.target.value)}/>
				</div>
			</div>

			<div className="input-block enviar">
				<button type="submit">Salvar</button>
			</div>
		</form>
	)
}

export default DevForm;