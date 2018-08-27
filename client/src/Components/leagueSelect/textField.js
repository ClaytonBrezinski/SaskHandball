import React from 'react';
import MaterialTextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	menu: {
		width: 200,
	},
});

class TextField extends React.Component {
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
		const { classes } = this.props;
		return (
			<form className={classes.container} noValidate autoComplete="off">
				<MaterialTextField
					id="textfield"
					name="textfield"
					label={this.props.name}
					className={classes.textField}
					value={this.state.textState}
					onChange={event => this.handleChange(event)}
					margin="normal"
				/>
			</form>
		);
	}
}

TextField.props = {
	defaultValue: PropTypes.string,
	name: PropTypes.string.isRequired,
};

export default withStyles(styles)(TextField);
