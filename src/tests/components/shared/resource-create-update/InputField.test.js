import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import InputField from '../../../../components/shared/resource-create-update/components/InputField.jsx';

Enzyme.configure({ adapter: new Adapter() });

// given
const props = {
    labelName: 'label name',
    name: 'name',
    value: 'some value',
    sendData: sinon.spy(),
    disabled: false
};

describe('InputField component', () => {
    it('renders component with the right props', () => {
        // when
        const enzymeWrapper = mount(<InputField {...props} />);

        // then
        expect(enzymeWrapper.props().labelName).toBe(props.labelName);
        expect(enzymeWrapper.props().name).toBe(props.name);
        expect(enzymeWrapper.props().value).toBe(props.value);
    });

    it('send change event', () => {
        // given
        const event = {target: {value: 'value 2'}};

        // when
        const enzymeWrapper = mount(<InputField {...props} />);
        enzymeWrapper.update();
        enzymeWrapper.find('input').simulate('change', event);

        // then
        expect(enzymeWrapper.state().value).toEqual('value 2');
        expect(props.sendData.callCount).toBe(1);
    });
});