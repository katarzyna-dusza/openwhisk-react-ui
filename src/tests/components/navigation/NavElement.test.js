import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavElement from '../../../components/navigation/components/NavElement.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('NavElement component', () => {
    it('renders component', () => {
        // given
        const props = {
            name: 'Nav Name',
            links: [{name: 'test', icon: 'icon', link: '/test'}, {name: 'test2', icon: 'icon', link: '/test2'}],
            current: '/test2'
        };

        // when
        const enzymeWrapper = shallow(<NavElement {...props} />);

        // then
        expect(enzymeWrapper.props().className).toBe('top-nav__section');
    });

    it('renders NavElement component with the right props', () => {
        // given
        const props = {
            name: 'Nav Name',
            links: [{name: 'test', icon: 'icon', link: '/test'}, {name: 'test2', icon: 'icon', link: '/test2'}],
            current: '/test2'
        };

        // when
        const enzymeWrapper = mount(<MemoryRouter><NavElement {...props} /></MemoryRouter>);

        // then
        expect(enzymeWrapper.find('.section__elem--active').at(0).props().to).toBe('/test2');
        expect(enzymeWrapper.find('.section__elem--active').at(1).props().href).toBe('/test2');
        expect(enzymeWrapper.find('.header').props().children).toBe(props.name);
        expect(enzymeWrapper.find('.section').props().children).toHaveLength(2);
    });
});