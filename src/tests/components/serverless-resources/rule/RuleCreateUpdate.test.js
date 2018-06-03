import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { fetchRuleResponse } from '../../../mock-data-rule';
import RuleCreateUpdate from '../../../../components/serverless-resources/rule/RuleCreateUpdate.jsx';
import ResourceCreateUpdate from '../../../../components/shared/resource-create-update/ResourceCreateUpdate.jsx';

Enzyme.configure({ adapter: new Adapter() });

// given
const propsCreate = {
    title: 'Create some-title',
    save: sinon.spy(),
    isCreateView: true
};

const propsUpdate = {
    title: 'Update some-title',
    rule: fetchRuleResponse,
    save: sinon.spy(),
    isCreateView: false
};

describe('RuleCreateUpdate component', () => {
    it('renders ResourceCreateUpdate component', () => {
        // when
        const enzymeWrapper = shallow(<RuleCreateUpdate {...propsCreate} />);

        // then
        expect(enzymeWrapper.find(ResourceCreateUpdate)).toHaveLength(1);
    });

    it('update the state for create', () => {
        // given
        const name = {name: 'name', value: 'value'};
        const trigger = {name: 'trigger', value: 'trigger-value'};
        const action = {name: 'action', value: 'action-value'};

        // when
        const enzymeWrapper = shallow(<RuleCreateUpdate {...propsCreate} />);
        enzymeWrapper.instance().handleChange(name);
        enzymeWrapper.instance().handleChange(trigger);
        enzymeWrapper.instance().handleChange(action);

        // then
        expect(enzymeWrapper.state().name).toBe(name.value);
        expect(enzymeWrapper.state().trigger).toBe(trigger.value);
        expect(enzymeWrapper.state().action).toBe(action.value);
        expect(enzymeWrapper.state().changed).toBeTruthy();
    });

    it('update the state for create - handle empty field', () => {
        // given
        const name = {name: 'name', value: ''};
        const trigger = {name: 'trigger', value: ''};
        const action = {name: 'action', value: ''};

        // when
        const enzymeWrapper = shallow(<RuleCreateUpdate {...propsCreate} />);
        enzymeWrapper.instance().handleChange(name);
        enzymeWrapper.instance().handleChange(trigger);
        enzymeWrapper.instance().handleChange(action);

        // then
        expect(enzymeWrapper.state().name).toBe(name.value);
        expect(enzymeWrapper.state().trigger).toBe(trigger.value);
        expect(enzymeWrapper.state().action).toBe(action.value);
        expect(enzymeWrapper.state().changed).toBeFalsy();
    });

    it('update the state for update', () => {
        // given
        const trigger = {name: 'trigger', value: 'new-value'};
        const action = {name: 'action', value: 'new-action'};

        // when
        const enzymeWrapper = shallow(<RuleCreateUpdate {...propsUpdate} />);
        enzymeWrapper.instance().handleChange(trigger);
        enzymeWrapper.instance().handleChange(action);

        // then
        expect(enzymeWrapper.state().trigger).toBe(trigger.value);
        expect(enzymeWrapper.state().action).toBe(action.value);
        expect(enzymeWrapper.state().changed).toBeTruthy();
    });

    it('update the state for update - no changes', () => {
        // given
        const trigger = {name: 'trigger', value: 'trigger-name'};
        const action = {name: 'action', value: 'action-name'};

        // when
        const enzymeWrapper = shallow(<RuleCreateUpdate {...propsUpdate} />);
        enzymeWrapper.instance().handleChange(trigger);
        enzymeWrapper.instance().handleChange(action);

        // then
        expect(enzymeWrapper.state().trigger).toBe(trigger.value);
        expect(enzymeWrapper.state().action).toBe(action.value);
        expect(enzymeWrapper.state().changed).toBeFalsy();
    });
});