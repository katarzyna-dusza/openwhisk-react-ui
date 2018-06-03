import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import CreateButton from '../../../../components/shared/resource-list/components/CreateButton.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('CreateButton component', () => {
    it('is visible', () => {
        // given
        const history = {
            push: sinon.spy()
        };
        const link = '/some-link/create';

        // when
        const enzymeWrapper = shallow(<CreateButton history={history} link={link} />);

        // then
        expect(enzymeWrapper.props().className).toBe('create-btn');
    });

    it('is not visible', () => {
        // given
        const history = {
            push: sinon.spy()
        };
        const link = '';

        // when
        const enzymeWrapper = shallow(<CreateButton history={history} link={link} />);

        // then
        expect(enzymeWrapper.props().className).not.toBe('create-btn');
    });


    it('should redirect to create page', () => {
        // given
        const history = {
            push: sinon.spy()
        };
        const link = '/some-link/create';

        // when
        const enzymeWrapper = shallow(<CreateButton history={history} link={link} />);
        enzymeWrapper.find('.create-btn').simulate('click');

        // then
        expect(history.push.callCount).toBe(1);
    });
});