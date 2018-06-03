import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EmptyPage from '../../../../components/shared/resource-list/components/EmptyPage.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('EmptyPage component', () => {
    it('renders component with the right props', () => {
        // given
        const resource = 'Resource';
        const props = {
            title: 'List of Resources',
            resource: resource
        };

        // when
        const enzymeWrapper = mount(<MemoryRouter><EmptyPage {...props} /></MemoryRouter>);

        // then
        expect(enzymeWrapper.find('.resource__title').props().children).toBe(props.title);
    });
});
