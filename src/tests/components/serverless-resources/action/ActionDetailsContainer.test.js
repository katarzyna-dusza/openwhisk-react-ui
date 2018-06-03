import React from 'react';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import { fetchActionResponse, actionsByNameFetchActionExpanded, actionNamesFetchAction } from '../../../mock-data-action';
import { ActionDetailsContainer, mapStateToProps } from '../../../../components/serverless-resources/action/details/ActionDetailsContainer.jsx';
import ActionCreateUpdate from '../../../../components/serverless-resources/action/ActionCreateUpdate.jsx';
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
    action: fetchActionResponse,
    actionName: 'name-one',
    fetchAction: sinon.spy(),
    updateAction: sinon.spy(),
    isRequestSuccessful: ''
};

describe('ActionDetailsContainer component', () => {
    it('renders ActionCreateUpdate component', () => {
        // given
        const initialState = {
            actionsByName: actionsByNameFetchActionExpanded,
            actionNames: actionNamesFetchAction
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <ActionDetailsContainer
                    {...props}
                />
            </Provider>
        );

        // then
        expect(enzymeWrapper.find(ActionCreateUpdate)).toHaveLength(1);
    });

    it('renders Loader component', () => {
        // given
        const initialState = {
            actionsByName: {},
            actionNames: []
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <ActionDetailsContainer
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
            actionsByName: actionsByNameFetchActionExpanded,
            actionNames: actionNamesFetchAction,
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
        expect(expectedMapStateToProps.actionName).toBe('name-one');
        expect(expectedMapStateToProps.action).toEqual(fetchActionResponse);
        expect(expectedMapStateToProps.isRequestSuccessful).toEqual('');
    });

    it('should check correctness of mapStateToProps after UPDATE action', () => {
        // given
        const history = {
            push: sinon.spy()
        };
        const initialState = {
            actionsByName: actionsByNameFetchActionExpanded,
            actionNames: actionNamesFetchAction,
            isFetching: false,
            isRequestSuccessful: 'ACTION_UPDATED'
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const newProps = {
            isRequestSuccessful: 'ACTION_UPDATED'
        };
        const enzymeWrapper = mount(
                <ActionDetailsContainer
                    {...props} history={history} store={store}
                />
        );
        enzymeWrapper.setProps(newProps);

        // then
        expect(enzymeWrapper.props().history.push.callCount).toBe(1);
    });
});