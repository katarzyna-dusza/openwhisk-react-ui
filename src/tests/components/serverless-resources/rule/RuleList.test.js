import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { fetchRulesResponse } from '../../../mock-data-rule';
import RuleList from '../../../../components/serverless-resources/rule/list/RuleList.jsx';
import ResourceList from '../../../../components/shared/resource-list/ResourceList.jsx';

Enzyme.configure({ adapter: new Adapter() });

// given
const props = {
    deleteResource: sinon.spy(),
    rules: fetchRulesResponse
};

describe('RuleList component', () => {
    it('renders ResourceList component', () => {
        // when
        const enzymeWrapper = shallow(<RuleList {...props} />);

        // then
        expect(enzymeWrapper.find(ResourceList)).toHaveLength(1);
    });

    it('handle delete action', () => {
        // when
        const enzymeWrapper = mount(<MemoryRouter><RuleList {...props} /></MemoryRouter>);
        enzymeWrapper.find('.material-icons').at(0).simulate('click');

        // then
        expect(props.deleteResource.callCount).toBe(1);
    });
});