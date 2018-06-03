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
    actionsByNameFetchActions,
    actionNamesFetchActions,
    fetchActionsResponse
} from '../../../mock-data-action';
import Loader from '../../../../components/shared/loader/Loader.jsx';
import { ActionListContainer, mapStateToProps } from '../../../../components/serverless-resources/action/list/ActionListContainer.jsx';
import ActionList from '../../../../components/serverless-resources/action/list/ActionList.jsx'

Enzyme.configure({ adapter: new Adapter() });

const props = {
    actions: fetchActionsResponse,
    fetchActions: sinon.spy(),
    deleteAction: sinon.spy()
};

describe('ActionListContainer component', () => {
    it('renders List component', () => {
        // given
        const initialState = {
            actionsByName: actionsByNameFetchActions,
            actionNames: actionNamesFetchActions,
            isFetching: false
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ActionListContainer
                        {...props}
                    />
                </MemoryRouter>
            </Provider>
        );

        // then
        expect(enzymeWrapper.find(ActionList)).toHaveLength(1);
    });

    it('renders Loader component', () => {
        // given
        const initialState = {
            actionsByName: {},
            actionNames: [],
            isFetching: true
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <ActionListContainer
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
            actionsByName: actionsByNameFetchActions,
            actionNames: actionNamesFetchActions,
            isFetching: false
        };

        // when
        const expectedMapStateToProps = mapStateToProps(initialState, {});

        // then
        expect(expectedMapStateToProps.actions).toEqual(fetchActionsResponse);
        expect(expectedMapStateToProps.isFetching).toBeFalsy();
    });
});