import React from 'react';
import { shallow } from 'enzyme';
import LeagueDropdown from './LeagueDropdown';

describe(<LeagueDropdown />, () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<LeagueDropdown />);
        expect(wrapper);
    });
});
