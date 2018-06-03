import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import CodeEditor from '../../../../components/shared/resource-create-update/components/CodeEditor';
import AceEditor from 'react-ace';

Enzyme.configure({ adapter: new Adapter() });

// given
const props = {
    mode: 'javascript',
    sendData: sinon.spy(),
};

describe('CodeEditor component', () => {
    it('renders AceEditor component', () => {
        // when
        const enzymeWrapper = shallow(<CodeEditor {...props} />);

        // then
        expect(enzymeWrapper.find(AceEditor)).toHaveLength(1);
    });

    it('renders CodeEditor component with the right props', () => {
        // when
        const enzymeWrapper = shallow(<CodeEditor {...props} />);

        // then
        expect(enzymeWrapper.props().mode).toBe(props.mode);
    });

    it('send change event', () => {
        // given
        const event = 'console.log(1)';

        // when
        const enzymeWrapper = shallow(<CodeEditor {...props}/>);
        enzymeWrapper.simulate('change', event);

        // then
        expect(enzymeWrapper.state().value).toEqual(event);
    });
});