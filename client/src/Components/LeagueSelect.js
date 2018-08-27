import React, { Component } from 'react';
import { Dropdown, TextField } from './leagueSelect/index';
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
				<TextField name="test1" />
			</React.Fragment>
		);
	}
}
