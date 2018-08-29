import React from 'react';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import request from 'request';

export default class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selectState: '' };
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		// manually state that this.props.options is an array, then run the map function on it
		var menuOptions = Array.from(this.props.options);
		menuOptions = menuOptions.map(function(item, i) {
			return (
				<MenuItem value={item} key={i}>
					{item}
				</MenuItem>
			);
		});
		return (
			<React.Fragment>
				<InputLabel>{this.props.label}</InputLabel>
				<Select
					value={this.state.selectState}
					onChange={this.handleChange}
					inputProps={{ name: 'selectState' }}
					fullWidth
				>
					{/* if menuOptions exist, add them in here */}
					{menuOptions.length > 0 ? menuOptions : <MenuItem />}
				</Select>
			</React.Fragment>
		);
	}
}

Dropdown.props = {
	label: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.String),
	requestURL: PropTypes.string,
};
