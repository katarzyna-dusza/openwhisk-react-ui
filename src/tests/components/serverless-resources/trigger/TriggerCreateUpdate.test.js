import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import TriggerCreateUpdate from '../../../../components/serverless-resources/trigger/TriggerCreateUpdate.jsx';
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
    trigger: {
        parameters: '',
        package: ''
    },
    save: sinon.spy(),
    isCreateView: false
};

describe('TriggerCreateUpdate component', () => {
    it('renders ResourceCreateUpdate component', () => {
        // when
        const enzymeWrapper = shallow(<TriggerCreateUpdate {...propsCreate} />);

        // then
        expect(enzymeWrapper.find(ResourceCreateUpdate)).toHaveLength(1);
    });

    it('update the state for create', () => {
        // given
        const name = {name: 'name', value: 'value2'};

        // when
        const enzymeWrapper = shallow(<TriggerCreateUpdate {...propsCreate} />);
        enzymeWrapper.instance().handleChange(name);

        // then
        expect(enzymeWrapper.state().name).toBe(name.value);
        expect(enzymeWrapper.state().changed).toBeTruthy();
    });

    it('update the state for create - handle empty field', () => {
        // given
        const name = {name: 'name', value: ''};

        // when
        const enzymeWrapper = shallow(<TriggerCreateUpdate {...propsCreate} />);
        enzymeWrapper.instance().handleChange(name);

        // then
        expect(enzymeWrapper.state().name).toBe(name.value);
        expect(enzymeWrapper.state().changed).toBeFalsy();
    });

    it('update the state for update', () => {
        // given
        const parameters = {name: 'parameters', value: '[{"key": "name", "value": "Some Name"}]'};

        // when
        const enzymeWrapper = shallow(<TriggerCreateUpdate {...propsUpdate} />);
        enzymeWrapper.instance().handleChange(parameters);

        // then
        expect(enzymeWrapper.state().parameters).toBe(parameters.value);
        expect(enzymeWrapper.state().changed).toBeTruthy();
    });

    it('update the state for update - no changes', () => {
        // given
        const parameters = {name: 'parameters', value: ''};
        const packageState = {name: 'package', value: ''};

        // when
        const enzymeWrapper = shallow(<TriggerCreateUpdate {...propsUpdate} />);
        enzymeWrapper.instance().handleChange(parameters);
        enzymeWrapper.instance().handleChange(packageState);

        // then
        expect(enzymeWrapper.state().parameters).toBe(parameters.value);
        expect(enzymeWrapper.state().package).toBe(packageState.value);
        expect(enzymeWrapper.state().changed).toBeFalsy();
    });
});