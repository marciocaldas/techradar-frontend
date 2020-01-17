import React from 'react';

function DevItem({ dev }) {
	return (
		<li className="dev-item">
			<header>
				<img src={dev.avatar_url} alt={dev.github_username}/>
				<div className="user-info">
					<strong>{dev.name}</strong>
					<span>{dev.techs.join(', ')}</span>
				</div>
			</header>
			<p>{dev.bio}</p>
			<a href={`https://github.com/${dev.github_username}`} target="new">Acessar perfil do GitHub</a>
		</li>
	)
}

export default DevItem;