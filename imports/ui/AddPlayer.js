import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		let playerName = e.target.playerName.value;

		if (playerName) {

			// Reset input
			e.target.playerName.value = '';

			Players.insert({
				name: playerName,
				score: 2
			});
		}
		
	}

	render(){
		return (
			<div className="item">
				<form className="form" onSubmit={this.handleSubmit}>
				<input className="form__input" type="text" name="playerName" placeholder="Player Name" />
				<button className="button">Add Player</button>
				</form>
			</div>
		);
	}
}