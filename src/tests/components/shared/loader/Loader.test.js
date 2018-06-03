import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loader from '../../../../components/shared/loader/Loader.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Loader component', () => {
    it('is truthy with the proper title', () => {
        const props = {
            title: 'Test title'
        };
        const enzymeWrapper = mount(<Loader {...props} />);
        expect(enzymeWrapper.props().title).toBe(props.title);
    });
});