import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

export default class TextField extends React.Component {
	constructor(props) {
		super(props);
		if (!this.props.defaultValue) {
			this.state = { textState: '' };
		} else {
			this.state = { textState: this.props.defaultValue };
		}
	}

	handleChange = event => {
		this.setState({ textState: event.target.value });
	};

	render() {
		return (
			<MaterialTextField
				id="textfield"
				name="textfield"
				label={this.props.name}
				value={this.state.textState}
				onChange={event => this.handleChange(event)}
				margin="normal"
			/>
		);
	}
}

TextField.props = {
	defaultValue: PropTypes.string,
	name: PropTypes.string.isRequired,
};
