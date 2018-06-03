import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { fetchTriggersResponse } from '../../../mock-data-trigger';
import TriggerList from '../../../../components/serverless-resources/trigger/list/TriggerList.jsx';
import ResourceList from '../../../../components/shared/resource-list/ResourceList.jsx';

Enzyme.configure({ adapter: new Adapter() });

// given
const props = {
    run: sinon.spy(),
    deleteResource: sinon.spy(),
    triggers: fetchTriggersResponse,
    history: {
        push: sinon.spy()
    }
};

describe('TriggerList component', () => {
    it('renders ResourceList component', () => {
        // when
        const enzymeWrapper = shallow(<TriggerList {...props} />);

        // then
        expect(enzymeWrapper.find(ResourceList)).toHaveLength(1);
    });

    it('handle run action', () => {
        // when
        const enzymeWrapper = mount(<MemoryRouter><TriggerList {...props} /></MemoryRouter>);
        enzymeWrapper.find('.material-icons').at(0).simulate('click');

        // then
        expect(props.run.callCount).toBe(1);
    });

    it('handle delete action', () => {
        // when
        const enzymeWrapper = mount(<MemoryRouter><TriggerList {...props} /></MemoryRouter>);
        enzymeWrapper.find('.material-icons').at(1).simulate('click');

        // then
        expect(props.deleteResource.callCount).toBe(1);
    });
});