import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header, { HeaderColumn } from '../../../../components/shared/resource-list/components/Header.jsx';

Enzyme.configure({ adapter: new Adapter() });

const headerColumns = [
    {col: 'col-3', name: 'Name'},
    {col: 'col-2', name: 'Type'},
    {col: 'col-1', name: 'Published'},
    {col: 'col-1', name: 'Version'},
    {col: 'col-4', name: 'Namespace'},
    {col: 'col-1', name: ''}
];

describe('Header component', () => {
    it('renders component with the right props', () => {
        // given
        const props = {
            headerColumns: headerColumns
        };

        // when
        const enzymeWrapper = mount(<Header {...props} />);

        // then
        expect(enzymeWrapper.props().headerColumns).toBe(headerColumns);
    });

    it('renders 6 HeaderColumn components', () => {
        // given
        const props = {
            headerColumns: headerColumns
        };

        // when
        const enzymeWrapper = shallow(<Header {...props} />);

        // then
        expect(enzymeWrapper.find(HeaderColumn)).toHaveLength(6);
    });
});