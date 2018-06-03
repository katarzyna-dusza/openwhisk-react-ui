import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import {
    triggersByNameFetchTriggers,
    triggerNamesFetchTriggers,
    fetchTriggersResponse
} from '../../../mock-data-trigger';
import { TriggerListContainer, mapStateToProps } from '../../../../components/serverless-resources/trigger/list/TriggerListContainer.jsx';
import TriggerList from '../../../../components/serverless-resources/trigger/list/TriggerList.jsx'
import Loader from '../../../../components/shared/loader/Loader.jsx';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    fetchTriggers: sinon.spy(),
    deleteTrigger: sinon.spy(),
    fireTrigger: sinon.spy()
};

describe('TriggerListContainer component', () => {
    it('renders List component', () => {
        // given
        const initialState = {
            triggersByName: triggersByNameFetchTriggers,
            triggerNames: triggerNamesFetchTriggers,
            isFetching: false
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <TriggerListContainer
                        {...props}
                    />
                </MemoryRouter>
            </Provider>
        );

        // then
        expect(enzymeWrapper.find(TriggerList)).toHaveLength(1);
    });

    it('renders Loader component', () => {
        // given
        const initialState = {
            triggersByName: {},
            triggerNames: [],
            isFetching: true
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <TriggerListContainer
                        {...props}
                    />
                </MemoryRouter>
            </Provider>
        );

        // then
        expect(enzymeWrapper.find(Loader)).toHaveLength(1);
    });

    it('should check correctness of mapStateToProps', () => {
        // given
        const initialState = {
            triggersByName: triggersByNameFetchTriggers,
            triggerNames: triggerNamesFetchTriggers,
            isFetching: false
        };

        // when
        const expectedMapStateToProps = mapStateToProps(initialState, {});

        // then
        expect(expectedMapStateToProps.triggers).toEqual(fetchTriggersResponse);
        expect(expectedMapStateToProps.isFetching).toBeFalsy();
    });
});