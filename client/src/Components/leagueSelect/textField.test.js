import React from 'react';
import { assert } from 'chai';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import TextField from './textField';
import {
	InputLabel,
	Select,
	MenuItem,
	FormControl,
	AppBar,
} from '@material-ui/core';

describe(<TextField />, () => {
	describe('Shallow', () => {
		shallow = createShallow();
		let wrapper = shallow(<TextField />);

		it('renders without crashing and without props', wrapper => {
			expect(wrapper);
		});

		it('should be a TextField', wrapper => {
			assert.strictEqual(wrapper.type(), TextField);
		});

		it('updates visible value when text is entered', () => {});
	});
});
