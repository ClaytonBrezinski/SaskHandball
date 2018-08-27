import React from 'react';
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import request from 'request';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing.unit,
		minWidth: 120,
	},
});

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selectState: '' };
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { classes } = this.props;
		var menuOptions = Array.from(this.props.options);
		console.log('options: ' + menuOptions);
		var menuOptions = menuOptions.map(function(item) {
			return <MenuItem value={item}>{item}</MenuItem>;
		});
		return (
			<form className={classes.root} autoComplete="off">
				<FormControl className={classes.formControl}>
					<InputLabel>{this.props.label}</InputLabel>
					<Select
						value={this.state.selectState}
						onChange={this.handleChange}
						inputProps={{ name: 'selectState' }}
					>
						{/* if menuOptions exist, add tthem in here */}
						{menuOptions.length > 0 ? menuOptions : <MenuItem />}
					</Select>
				</FormControl>
			</form>
		);
	}
}

Dropdown.props = {
	label: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.String),
	requestURL: PropTypes.string,
};

export default withStyles(styles)(Dropdown);
