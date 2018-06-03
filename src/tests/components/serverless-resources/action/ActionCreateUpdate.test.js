import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import ActionCreateUpdate from '../../../../components/serverless-resources/action/ActionCreateUpdate.jsx';
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
    action: {
      exec: {
          code: 'console.log(12345)'
      }
    },
    save: sinon.spy(),
    isCreateView: false
};

describe('ActionCreateUpdate component', () => {
    it('renders ResourceCreateUpdate component', () => {
        // when
        const enzymeWrapper = shallow(<ActionCreateUpdate {...propsCreate} />);

        // then
        expect(enzymeWrapper.find(ResourceCreateUpdate)).toHaveLength(1);
    });

    it('update the state for create', () => {
        // given
        const name = {name: 'name', value: 'value2'};
        const code = {name: 'code', value: 'console.log(1)'};

        // when
        const enzymeWrapper = shallow(<ActionCreateUpdate {...propsCreate} />);
        enzymeWrapper.instance().handleChange(name);
        enzymeWrapper.instance().handleChange(code);

        // then
        expect(enzymeWrapper.state().name).toBe(name.value);
        expect(enzymeWrapper.state().code).toBe(code.value);
        expect(enzymeWrapper.state().changed).toBeTruthy();
    });

    it('update the state for create - handle empty field', () => {
        // given
        const name = {name: 'name', value: ''};

        // when
        const enzymeWrapper = shallow(<ActionCreateUpdate {...propsCreate} />);
        enzymeWrapper.instance().handleChange(name);

        // then
        expect(enzymeWrapper.state().name).toBe(name.value);
        expect(enzymeWrapper.state().changed).toBeFalsy();
    });

    it('update the state for update', () => {
        // given
        const code = {name: 'code', value: 'console.log(1)'};

        // when
        const enzymeWrapper = shallow(<ActionCreateUpdate {...propsUpdate} />);
        enzymeWrapper.instance().handleChange(code);

        // then
        expect(enzymeWrapper.state().code).toBe(code.value);
        expect(enzymeWrapper.state().changed).toBeTruthy();
    });

    it('update the state for update - no changes', () => {
        // given
        const code = {name: 'code', value: 'console.log(12345)'};

        // when
        const enzymeWrapper = shallow(<ActionCreateUpdate {...propsUpdate} />);
        enzymeWrapper.instance().handleChange(code);

        // then
        expect(enzymeWrapper.state().code).toBe(code.value);
        expect(enzymeWrapper.state().changed).toBeFalsy();
    });
});