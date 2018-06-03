import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from '../../../components/navigation/Navigation.jsx';
import NavElement from '../../../components/navigation/components/NavElement.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Navigation component', () => {
    it('renders NavElement components', () => {
        // when
        const enzymeWrapper = mount(<MemoryRouter><Navigation /></MemoryRouter>);

        // then
        expect(enzymeWrapper.find(NavElement)).toHaveLength(2);
    });
});