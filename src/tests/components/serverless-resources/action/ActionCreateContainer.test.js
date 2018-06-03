import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import { ActionCreateContainer } from '../../../../components/serverless-resources/action/create/ActionCreateContainer.jsx';
import ActionCreateUpdate from '../../../../components/serverless-resources/action/ActionCreateUpdate.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('ActionCreateContainer component', () => {
    it('renders ActionCreateUpdate component', () => {
        // given
        const initialState = {};
        const mockStore = configureStore();
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = shallow(<ActionCreateContainer store={store}/>).dive();

        // then
        expect(enzymeWrapper.find(ActionCreateUpdate)).toHaveLength(1);
    });

    it('renders ActionCreateUpdate component with the right props', () => {
        // given
        const initialState = {};
        const mockStore = configureStore();
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = shallow(<ActionCreateContainer store={store}/>).dive();

        // then
        expect(enzymeWrapper.find(ActionCreateUpdate).props().title).toBe('New Action');
        expect(enzymeWrapper.find(ActionCreateUpdate).props().save).toBeDefined();
    });

    it('should check correctness of mapStateToProps after CREATE action', () => {
        // given
        const initialState = {
            isFetching: false,
            isRequestSuccessful: 'ACTION_CREATED'
        };
        const props = {
            history: {
                push: sinon.spy()
            },
            createAction: sinon.spy()
        };
        const mockStore = configureStore([]);
        const store = mockStore(initialState);

        // when
        const newProps = {
            isRequestSuccessful: 'ACTION_CREATED'
        };
        const enzymeWrapper = mount(<ActionCreateContainer{...props} store={store}/>);
        enzymeWrapper.setProps(newProps);

        // then
        expect(enzymeWrapper.props().history.push.callCount).toBe(1);
    });
});