import React from 'react';
import classNames from 'classnames';

function DevItem({ dev }) {

	return (
		<li className="dev-item">
			<header>
				<div>
					<img src={dev.avatar_url} alt={dev.github_username}/>
				</div>

				<div className="user-info">
					<strong>{dev.name}</strong>
					<div className={classNames('icon-css', {'show': dev.css === true})}></div>
					<div className={classNames('icon-html', {'show': dev.html === true})}></div>
					<div className={classNames('icon-js', {'show': dev.js === true})}></div>
					<div className={classNames('icon-nodejs', {'show': dev.nodejs === true})}></div>
					<div className={classNames('icon-reactjs', {'show': dev.reactjs === true})}></div>
					<div className={classNames('icon-reactnative', {'show': dev.reactnative === true})}></div>
					<span className={classNames('none', dev.reactjs === false)}>reactjs</span>
					<span className="none">{dev.techs.join(' | ')}</span>
				</div>
			</header>
			<a className="" href={`https://github.com/${dev.github_username}`} target="new"></a>
			<p className="">
				{dev.bio}
			</p>

			<span className="followers">
				Followers: <strong>{dev.followers}</strong> /
				Following: <strong>{dev.following}</strong>
			</span>
		</li>
	)
}

export default DevItem;