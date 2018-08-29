import React from 'react';
import { shallow } from 'enzyme';
import Payments from './Payments';

describe(<Payments />, () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Payments />);
		expect(wrapper);
	});
});
