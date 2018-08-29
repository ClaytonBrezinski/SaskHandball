import React from 'react';
import { Dropdown, TextField } from './leagueSelect/index';
import request from 'request';
import { Grid, FormControl } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 200,
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
			<Grid>
				<form className={classes.container} autoComplete="off">
					<FormControl className={classes.formControl}>
						<Dropdown label="League" options={['a', 'b']} />
						<Dropdown label="Team" options />
						<TextField name="FirstName" />
						<TextField name="LastName" />
					</FormControl>
				</form>
			</Grid>
		);
	}
}

export default withStyles(styles)(LeagueSelect);
