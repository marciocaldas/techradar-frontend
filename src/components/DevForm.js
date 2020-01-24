import React, {useEffect, useState } from 'react';

function DevForm({ onSubmit }) {

	const [github_username, setGitHubUserName ] = useState('');
	const [techs, setTechs] = useState('');
	const [css, setCss] = useState(false);
	const [html, setHtml] = useState(false);
	const [js, setJs] = useState(false);
	const [nodejs, setNodeJs] = useState(false);
	const [reactjs, setReactJs] = useState(false);
	const [reactnative, setReactNative] = useState(false);
	const [latitude, setLatitude ] = useState('');
	const [longitude, setLongitude] = useState('');

	function getCss() 			{ setCss(!css); };
	function getHtml() 			{ setHtml(!html); };
	function getJs() 			{ setJs(!js); };
	function getNodeJs() 		{ setNodeJs(!nodejs) }
	function getReactJs() 		{ setReactJs(!reactjs); };
	function getReactNative() 	{ setReactNative(!reactnative); };

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(position) => {
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
			css,
			html,
			js,
			nodejs,
			reactjs,
			reactnative,
			longitude,
			latitude
		});

		setGitHubUserName('');
		setTechs('');

		console.log(reactjs)
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
			
			{/* Input para inserção de techs ocultado pois estamos selecionando via checkbox */}
			<div className="input-block none">
				<label htmlFor="">Tecnologias:</label>
				<input
					type="text"
					id="techs"
					value={techs}
					onChange={e => setTechs(e.target.value)}/>
			</div>

			<div className="input-block">
				<label htmlFor="">Tecnologias:</label>

				<div className="check-block">
					{/* CSS */}
					<div className="checkbox">
						<input
							type="checkbox"
							name="CSS"
							value={css}
							onChange={getCss}
						/>
						<label htmlFor="">CSS</label>
					</div>

					{/* HTML */}
					<div className="checkbox">
						<input
							type="checkbox"
							name="HTML"
							value={html}
							onChange={getHtml}
						/>
						<label htmlFor="">Html5</label>
					</div>
				</div>

				<div className="check-block">
					{/* JavaScript */}
					<div className="checkbox">
						<input
							type="checkbox"
							name="JavaScript"
							value={js}
							onChange={getJs}
						/>
						<label htmlFor="">JavaScript</label>
					</div>

					{/* NodeJs */}
					<div className="checkbox">
						<input
							type="checkbox"
							name="NodeJs"
							value={nodejs}
							onChange={getNodeJs}
						/>
						<label htmlFor="">NodeJs</label>
					</div>
				</div>

				<div className="check-block">
					{/* ReactJs */}
					<div className="checkbox">
						<input
							type="checkbox"
							name="ReactJs"
							value={js}
							onChange={getReactJs}
						/>
						<label htmlFor="">ReactJs</label>
					</div>

					{/* React Native */}
					<div className="checkbox">
						<input
							type="checkbox"
							name="ReactNative"
							value={reactnative}
							onChange={getReactNative}
						/>
						<label htmlFor="">React Native</label>
					</div>
				</div>
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