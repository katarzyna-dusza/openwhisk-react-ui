import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import ResourceCreateUpdate from '../../../../components/shared/resource-create-update/ResourceCreateUpdate.jsx';
import InputField from '../../../../components/shared/resource-create-update/components/InputField.jsx';
import CodeEditor from '../../../../components/shared/resource-create-update/components/CodeEditor.jsx';
import SaveButton from '../../../../components/shared/resource-create-update/components/SaveButton.jsx';

Enzyme.configure({ adapter: new Adapter() });

// given
const props = {
    title: 'Create an Action',
    data: {
        name: 'some-name',
        type: 'nodejs:6',
        code: 'console.log(1)'
    },
    changed: true,
    onClickSave: sinon.spy(),
    content: (
        <div>
            <div className='info'>
                Type the name, which is required to create your Action. Go ahead and write your code!
            </div>
            <div className='create-part col-12 row'>
                <InputField/>
                <InputField/>
            </div>
            <div className='info'>
                Code your Action below using JavaScript
            </div>
            <div className='create-part create-part--ace-editor'>
                <CodeEditor/>
            </div>
        </div>
    )
};

describe('ResourceCreateUpdate component', () => {
    it('renders content for creating an action', () => {
        // when
        const enzymeWrapper = mount(<ResourceCreateUpdate {...props} />);

        // then
        expect(enzymeWrapper.find(CodeEditor)).toHaveLength(1);
        expect(enzymeWrapper.find(SaveButton)).toHaveLength(1);
        expect(enzymeWrapper.find(InputField)).toHaveLength(2);
    });

    it('renders content with the proper props', () => {
        // when
        const enzymeWrapper = mount(<ResourceCreateUpdate {...props} />);

        // then
        expect(enzymeWrapper.props().title).toBe(props.title);
        expect(enzymeWrapper.props().data).toBe(props.data);
    });
});