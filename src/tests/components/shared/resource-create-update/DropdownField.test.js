import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import DropdownField from '../../../../components/shared/resource-create-update/components/DropdownField.jsx';

Enzyme.configure({ adapter: new Adapter() });

// given
const props = {
    labelName: 'label name',
    name: 'name',
    value: 'some value',
    sendData: sinon.spy(),
    dropdownElements: [{name: 'name1'}, {name: 'name2'}]
};

describe('DropdownField component', () => {
    it('renders component with the right props', () => {
        // when
        const enzymeWrapper = mount(<DropdownField {...props} />);

        // then
        expect(enzymeWrapper.props().labelName).toBe(props.labelName);
        expect(enzymeWrapper.props().name).toBe(props.name);
        expect(enzymeWrapper.props().value).toBe(props.value);
        expect(enzymeWrapper.props().dropdownElements).toBe(props.dropdownElements);
    });

    it('renders two dropdown items', () => {
        // when
        const enzymeWrapper = mount(<DropdownField {...props} />);

        // then
        expect(enzymeWrapper.find('.dropdown-item')).toHaveLength(2);
    });

    it('show dropdown', () => {
        // when
        const enzymeWrapper = mount(<DropdownField {...props} />);
        enzymeWrapper.find('.dropdown-toggle').simulate('click');

        // then
        expect(enzymeWrapper.state().show).toBeTruthy();
    });

    it('send change event - selected item', () => {
        // when
        const enzymeWrapper = mount(<DropdownField {...props} />);
        enzymeWrapper.update();
        enzymeWrapper.find('.dropdown-item').at(0).simulate('click');

        // then
        expect(enzymeWrapper.state().value).toEqual('name1');
        expect(props.sendData.callCount).toBe(1);
    });
});