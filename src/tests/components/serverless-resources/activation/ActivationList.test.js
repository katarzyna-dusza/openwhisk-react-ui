import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import { fetchActivationsResponse } from '../../../mock-data-activation';
import ActivationList from '../../../../components/serverless-resources/activation/list/ActivationList.jsx';
import ResourceList from '../../../../components/shared/resource-list/ResourceList.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('ActivationList component', () => {
    it('renders ResourceList component', () => {
        // given
        const props = {
            deleteResource: sinon.spy(),
            activations: fetchActivationsResponse
        };

        // when
        const enzymeWrapper = shallow(<ActivationList {...props} />);

        // then
        expect(enzymeWrapper.find(ResourceList)).toHaveLength(1);
    });
});