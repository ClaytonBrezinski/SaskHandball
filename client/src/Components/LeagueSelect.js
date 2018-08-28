import React, { Component } from 'react';
import { Dropdown, TextField } from './leagueSelect/index';
import request from 'request';
import { Card, CardContent, Grid } from '@material-ui/core';

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
			<Card raised="true" style={{ padding: '15px' }}>
				<CardContent>
					<Grid
						container
						spacing={24}
						direction="column"
						justify="center"
						alignItems="center"
					>
						<Dropdown label="League" options={['a', 'b']} />
						<Dropdown label="Team" options />
						<TextField name="FirstName" />
						<TextField name="LastName" />
					</Grid>
				</CardContent>
			</Card>
		);
	}
}
