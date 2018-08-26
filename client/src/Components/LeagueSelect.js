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
				<Dropdown name="testLabel" defaultValue="12" />
			</React.Fragment>
		);
	}
}
