import React, { Component } from 'react';
import Dropdown from './leagueSelect/dropdown';
import request from 'request';

export default class LeagueSelect extends Component {
	state = {
		leagueName: '',
		leagueID: '',
	};

	componentDidMount() {
		console.log('component has mounted');
	}
	render() {
		return (
			<React.Fragment>
				<Dropdown label="testLabel" options={['a', 'b']} />
				<Dropdown label="testLabel2" options />
			</React.Fragment>
		);
	}
}
