import React from 'react';
import { shallow } from 'enzyme';
import LeagueSelect from './LeagueSelect';

describe(<LeagueSelect />, () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<LeagueSelect />);
        expect(wrapper);
    });
});
