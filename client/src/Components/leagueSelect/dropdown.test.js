import React from 'react';
import { shallow, mount } from 'enzyme';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import Dropdown from './dropdown';
import { InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';

describe(<Dropdown />, () => {
	let props;
	let shallow;
	let mount;

	beforeEach(() => {
		props = {
			options: ['a', 'b'],
		};
		shallow = createShallow();
		mount = createMount();
	});

	afterEach(() => {
		mount.cleanUp();
	});

	it('renders without crashing and without props', () => {
		const wrapper = shallow(<Dropdown />);
		expect(wrapper);
	});
	it('contains the dropdown ', () => {
		const wrapper = shallow(<Dropdown />);
		expect(wrapper.contains('Dropdown'));
	});
	it('contains the dropdown ', () => {
		const wrapper = shallow(<Dropdown options={['a', 'b']} />);

		// // .simulate('change', { target: { value: 'c' } });
		// expect(wrapper.find('form.Dropdown')).toHaveLength(1)
		// // ).toHaveBeenCalled();
	});
});
