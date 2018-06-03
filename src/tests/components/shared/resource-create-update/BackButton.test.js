import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import BackButton from '../../../../components/shared/resource-create-update/components/BackButton.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('BackButton component', () => {
    it('is visible', () => {
        // given
        const history = {
            push: sinon.spy()
        };
        const link = '/some-link';

        // when
        const enzymeWrapper = shallow(<BackButton history={history} link={link} />);

        // then
        expect(enzymeWrapper.props().className).toBe('back-btn');
    });

    it('should go back to list', () => {
        // given
        const history = {
            push: sinon.spy()
        };
        const link = '/some-link';

        // when
        const enzymeWrapper = shallow(<BackButton history={history} link={link} />);
        enzymeWrapper.find('.back-btn').simulate('click');

        // then
        expect(history.push.callCount).toBe(1);
    });
});