import React from 'react';
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
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
		return (
			<form>
				<FormControl>
					<InputLabel>{this.props.label}</InputLabel>
					<Select
						value={this.state.selectState}
						onChange={this.handleChange}
						inputProps={{ name: 'selectState' }}
					>
						<MenuItem value={this.props.defaultValue}>
							{this.props.defaultValue}
						</MenuItem>
					</Select>
				</FormControl>
			</form>
		);
	}
}

Dropdown.props = {
	label: PropTypes.string,
	defaultValue: PropTypes.string.isRequired,
	otherValues: PropTypes.arrayOf(PropTypes.String),
	requestURL: PropTypes.string,
};
