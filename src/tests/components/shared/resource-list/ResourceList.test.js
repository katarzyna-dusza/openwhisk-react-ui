import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import List from '../../../../components/shared/resource-list/components/List.jsx';
import EmptyPage from '../../../../components/shared/resource-list/components/EmptyPage.jsx';
import ResourceList from '../../../../components/shared/resource-list/ResourceList.jsx';
import Pagination from 'react-js-pagination';

Enzyme.configure({ adapter: new Adapter() });

const propsMore = {
    resource: 'Resource',
    info: 'info',
    data: {
        entryColumns: [
            { data: 'some-data1' },
            { data: 'some-data2' },
            { data: 'some-data3' },
            { data: 'some-data4' },
            { data: 'some-data5' },
            { data: 'some-data6' },
            { data: 'some-data7' },
            { data: 'some-data8' },
            { data: 'some-data9' },
        ]
    }
};

describe('ResourceList component', () => {
    it('renders List component', () => {
        // given
        const props = {
            resource: 'Resource',
            info: 'info',
            data: {
                entryColumns: [{
                    data: 'some-data'
                }]
            }
        };

        // when
        const enzymeWrapper = shallow(<ResourceList {...props} />);

        // then
        expect(enzymeWrapper.find(List)).toHaveLength(1);
        expect(enzymeWrapper.find(EmptyPage)).toHaveLength(0);
    });

    it('renders EmptyPage component', () => {
        // given
        const props = {
            resource: 'Resource',
            info: 'info',
            data: {
                entryColumns: []
            }
        };

        // when
        const enzymeWrapper = shallow(<ResourceList {...props} />);

        // then
        expect(enzymeWrapper.find(List)).toHaveLength(0);
        expect(enzymeWrapper.find(EmptyPage)).toHaveLength(1);
    });

    it('renders Pagination', () => {
        // when
        const enzymeWrapper = shallow(<ResourceList {...propsMore} />);

        // then
        expect(enzymeWrapper.find(Pagination)).toHaveLength(1);
        expect(enzymeWrapper.find(Pagination).props().activePage).toBe(1);
    });

    it('update the state after changing the page', () => {
        // given
        const activePage = 2;

        // when
        const enzymeWrapper = shallow(<ResourceList {...propsMore} />);
        enzymeWrapper.instance().handleChange(activePage);

        // then
        expect(enzymeWrapper.state().activePage).toBe(activePage);
    });
});