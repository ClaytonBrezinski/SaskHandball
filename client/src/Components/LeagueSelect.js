import React from 'react';
import { Dropdown, TextField } from './leagueSelect/index';
import request from 'request';
import { Card, CardContent, Grid, FormControl } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 120,
	},
});
class LeagueSelect extends React.Component {
	state = {
		leagueName: '',
		leagueID: '',
	};

	componentDidMount() {
		console.log('component has mounted');
	}
	render() {
		const { classes } = this.props;
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
						<form className={classes.container} autoComplete="off">
							<FormControl className={classes.formControl}>
								<Dropdown label="League" options={['a', 'b']} />
								<Dropdown label="Team" options />
								<TextField name="FirstName" />
								<TextField name="LastName" />
							</FormControl>
						</form>
					</Grid>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(LeagueSelect);
