import React from 'react';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import {
    triggersByNameFetchTrigger,
    triggerNamesFetchTrigger,
    fetchTriggerResponse,
    triggersByNameUpdateTriggerChanged,
    triggersByNameFetchTriggerExpanded
} from '../../../mock-data-trigger';
import { TriggerDetailsContainer, mapStateToProps } from '../../../../components/serverless-resources/trigger/details/TriggerDetailsContainer.jsx';
import TriggerCreateUpdate from '../../../../components/serverless-resources/trigger/TriggerCreateUpdate.jsx';
import Loader from '../../../../components/shared/loader/Loader.jsx';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    match: {
        params: {
            name: 'name-one'
        }
    },
    history: {
        push: sinon.spy()
    },
    triggerName: 'name-one',
    trigger: fetchTriggerResponse,
    packages: [],
    fetchTrigger: sinon.spy(),
    updateTrigger: sinon.spy(),
    isRequestSuccessful: ''
};

describe('TriggerDetailsContainer component', () => {
    it('renders TriggerCreateUpdate component', () => {
        // given
        const initialState = {
            triggersByName: triggersByNameUpdateTriggerChanged,
            triggerNames: triggerNamesFetchTrigger,
            packageNames: [],
            packagesByName: {}
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <TriggerDetailsContainer
                    {...props}
                />
            </Provider>
        );

        // then
        expect(enzymeWrapper.find(TriggerCreateUpdate)).toHaveLength(1);
    });

    it('renders Loader component', () => {
        // given
        const initialState = {
            triggersByName: triggersByNameFetchTrigger,
            triggerNames: triggerNamesFetchTrigger,
            packageNames: [],
            packagesByName: {}
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <TriggerDetailsContainer
                    {...props}
                />
            </Provider>
        );

        // then
        expect(enzymeWrapper.find(Loader)).toHaveLength(1);
    });

    it('should check correctness of mapStateToProps', () => {
        // given
        const initialState = {
            triggersByName: triggersByNameFetchTriggerExpanded,
            triggerNames: triggerNamesFetchTrigger,
            packageNames: [],
            packagesByName: {},
            isFetching: false,
            isRequestSuccessful: ''
        };
        const match = {
            params: {
                name: 'name-one'
            }
        };

        // when
        const expectedMapStateToProps = mapStateToProps(initialState, {match});

        // then
        expect(expectedMapStateToProps.triggerName).toBe('name-one');
        expect(expectedMapStateToProps.trigger).toEqual(fetchTriggerResponse);
        expect(expectedMapStateToProps.isRequestSuccessful).toEqual('');
    });

    it('should check correctness of mapStateToProps after UPDATE action', () => {
        // given
        const history = {
            push: sinon.spy()
        };
        const initialState = {
            triggersByName: triggersByNameFetchTriggerExpanded,
            triggerNames: triggerNamesFetchTrigger,
            packageNames: [],
            packagesByName: {},
            isFetching: false,
            isRequestSuccessful: 'TRIGGER_UPDATED'
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const newProps = {
            isRequestSuccessful: 'TRIGGER_UPDATED'
        };
        const enzymeWrapper = mount(
                <TriggerDetailsContainer
                    {...props} history={history} store={store}
                />
        );
        enzymeWrapper.setProps(newProps);

        // then
        expect(enzymeWrapper.props().history.push.callCount).toBe(1);
    });
});