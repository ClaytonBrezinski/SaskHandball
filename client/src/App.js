import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Payments from './Components/Payments';
import LeagueSelect from './Components/LeagueSelect';
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
	layout: {
		marginTop: '10%',
		width: 'auto',
		display: 'block', // Fix IE11 issue.
		padding: '10px',
	},
};

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="background-image" />
				<div style={styles.layout}>
					<Grid
						container
						spacing={24}
						direction="column"
						justify="center"
						alignItems="center"
					>
						<Grid item xs={24} L={24}>
							<LeagueSelect />
						</Grid>
						<Grid item xs={24} L={24}>
							<Payments />
						</Grid>
					</Grid>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
