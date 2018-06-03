import React from 'react';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import { TriggerCreateContainer } from '../../../../components/serverless-resources/trigger/create/TriggerCreateContainer.jsx';
import TriggerCreateUpdate from '../../../../components/serverless-resources/trigger/TriggerCreateUpdate.jsx';

Enzyme.configure({ adapter: new Adapter() });

// given
const initialState = {
    packageNames: [],
    packagesByName: {},
    isRequestSuccessful: ''
};
const props = {
    packages: [],
    isRequestSuccessful: ''
};
const mockStore = configureStore([thunk, promise]);
const store = mockStore(initialState);

describe('TriggerCreateContainer component', () => {
    it('renders TriggerCreateUpdate component', () => {
        // when
        const enzymeWrapper = shallow(<TriggerCreateContainer store={store} {...props} />).dive();

        // then
        expect(enzymeWrapper.find(TriggerCreateUpdate)).toHaveLength(1);
    });

    it('renders TriggerCreateUpdate component with the right props', () => {
        // when
        const enzymeWrapper = shallow(<TriggerCreateContainer store={store} {...props} />).dive();

        // then
        expect(enzymeWrapper.find(TriggerCreateUpdate).props().title).toBe('New Trigger');
        expect(enzymeWrapper.find(TriggerCreateUpdate).props().save).toBeDefined();
    });

    it('should check correctness of mapStateToProps after CREATE action', () => {
        // given
        const history = {
            push: sinon.spy()
        };
        const initialState = {
            isFetching: false,
            isRequestSuccessful: 'TRIGGER_CREATED',
            packageNames: [],
            packagesByName: {}
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);
        const props = {
            history: {
                push: sinon.spy()
            },
            createTrigger: sinon.spy()
        };

        // when
        const newProps = {
            isRequestSuccessful: 'TRIGGER_CREATED'
        };
        const enzymeWrapper = mount(
            <TriggerCreateContainer
                {...props} history={history} store={store}
            />
        );
        enzymeWrapper.setProps(newProps);

        // then
        expect(enzymeWrapper.props().history.push.callCount).toBe(1);
    });
});