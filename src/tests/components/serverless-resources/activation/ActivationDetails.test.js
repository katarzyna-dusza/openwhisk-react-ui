import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import ActivationDetails from '../../../../components/serverless-resources/activation/details/ActivationDetails';
import ResourceCreateUpdate from '../../../../components/shared/resource-create-update/ResourceCreateUpdate';

Enzyme.configure({ adapter: new Adapter() });

describe('ActivationDetails component', () => {
    it('renders ResourceCreateUpdate component', () => {
        // given
        const props = {
            title: 'Update some-title',
            activation: {
                name: 'Some name',
                activationId: 'id'
            },
            history: {
                push: sinon.spy()
            }
        };

        // when
        const enzymeWrapper = shallow(<ActivationDetails {...props} />);

        // then
        expect(enzymeWrapper.find(ResourceCreateUpdate)).toHaveLength(1);
    });
});