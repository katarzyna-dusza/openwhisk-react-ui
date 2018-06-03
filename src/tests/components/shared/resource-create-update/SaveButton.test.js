import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import SaveButton from '../../../../components/shared/resource-create-update/components/SaveButton.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('SaveButton component', () => {
    it('is visible - all data filled', () => {
        // given
        const data = {
            name: 'some-name',
            type: 'nodejs:6',
            code: 'console.log(1)'
        };
        const required = ['name', 'type', 'code'];
        const changed = true;
        const save = sinon.spy();

        // when
        const enzymeWrapper = shallow(<SaveButton data={data} changed={changed} required={required} onClickSave={save} />);

        // then
        expect(enzymeWrapper.props().className).toBe('save-btn save-btn--show');
    });

    it('is visible - all required data filled', () => {
        // given
        const data = {
            name: 'some-name',
            parameters: '',
            package: ''
        };
        const required = ['name'];
        const changed = true;
        const save = sinon.spy();

        // when
        const enzymeWrapper = shallow(<SaveButton data={data} changed={changed} required={required} onClickSave={save} />);

        // then
        expect(enzymeWrapper.props().className).toBe('save-btn save-btn--show');
    });

    it('is not visible because of missing required data', () => {
        // given
        const data = {
            name: 'some-name',
            type: 'nodejs:6',
            code: ''
        };
        const required = ['name', 'type', 'code'];
        const changed = true;
        const save = sinon.spy();

        // when
        const enzymeWrapper = shallow(<SaveButton data={data} changed={changed} required={required} onClickSave={save} />);

        // then
        expect(enzymeWrapper.props().className).toBe('save-btn');
    });

    it('is not visible because of unchanged data - update view', () => {
        // given
        const data = {
            name: 'some-name',
            type: 'nodejs:6',
            code: 'console.log(1)'
        };
        const required = ['name', 'type', 'code'];
        const changed = false;
        const save = sinon.spy();

        // when
        const enzymeWrapper = shallow(<SaveButton data={data} changed={changed} required={required} onClickSave={save} />);

        // then
        expect(enzymeWrapper.props().className).toBe('save-btn');
    });

    it('dispatch a ACTION_CREATED', () => {
        // given
        const data = {
            name: 'some-name',
            type: 'nodejs:6',
            code: 'console.log(1)'
        };
        const required = ['name', 'type', 'code'];
        const changed = true;
        const save = sinon.spy();

        // when
        const enzymeWrapper = shallow(<SaveButton data={data} changed={changed} required={required} onClickSave={save} />);
        enzymeWrapper.find('.save-btn--show').simulate('click');

        // then
        expect(save.callCount).toBe(1);
    });
});