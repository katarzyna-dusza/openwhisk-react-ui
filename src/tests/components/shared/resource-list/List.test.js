import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../../../components/shared/resource-list/components/Header.jsx';
import List from '../../../../components/shared/resource-list/components/List.jsx';

Enzyme.configure({ adapter: new Adapter() });

const headerColumns = [
    {col: 'col-3', name: 'Name'},
    {col: 'col-2', name: 'Type'},
    {col: 'col-1', name: 'Published'},
    {col: 'col-1', name: 'Version'},
    {col: 'col-4', name: 'Namespace'},
    {col: 'col-1', name: 'Actions'}
];

const data = [{
    data: 'some-data'
}];

describe('List component', () => {
    it('renders component with the right props', () => {
        // given
        const props = {
            headerColumns: headerColumns,
            entryColumns: data
        };

        // when
        const enzymeWrapper = mount(<Header {...props} />);

        // then
        expect(enzymeWrapper.props().headerColumns).toBe(headerColumns);
        expect(enzymeWrapper.props().entryColumns).toBe(data);
    });

    it('renders Header component', () => {
        // given
        const props = {
            data: {
                headerColumns: headerColumns
            }
        };

        // when
        const enzymeWrapper = shallow(<List {...props} />);

        // then
        expect(enzymeWrapper.find(Header)).toHaveLength(1);
    });
});