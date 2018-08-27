import React from 'react';
import { shallow, mount } from 'enzyme';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import TextField from './textField';
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';

describe(<TextField />, () => {
	let props;
	let shallow;
	let mount;

	beforeEach(() => {
		shallow = createShallow();
		mount = createMount();
	});

	afterEach(() => {
		mount.cleanUp();
	});

	it('renders without crashing and without props', () => {
		const wrapper = shallow(<TextField />);
		expect(wrapper);
	});
});
