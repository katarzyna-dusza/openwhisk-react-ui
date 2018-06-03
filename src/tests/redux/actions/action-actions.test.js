import axios from 'axios';
import { config } from '../../../config';
import thunk from 'redux-thunk';
import { startRequestDispatcher } from '../../../store';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import combinedActions from '../../../redux/actions/index';
import { prepareAction } from '../../../redux/actions/action-actions';
import * as mockData from '../../mock-data-action';
import * as types from '../../actionTypes';

const middlewares = [startRequestDispatcher, thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe('ActionActions', () => {
    afterEach(() => {
        axiosMock.reset();
    });

    it('creates ACTION_CREATED action', () => {
        // given
        const actionDataToSend = {
            name: 'name-three',
            type: 'nodejs:6',
            code: 'console.log(1)'
        };
        const actionData = prepareAction(actionDataToSend);
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.ACTION_CREATED, action: mockData.createActionResponse }
        ];
        const store = mockStore({
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: [],
            triggersByName: {},
            isFetching: true,
            isRequestSuccessful: ''
        });

        // when
        axiosMock.onPut(`${config.baseUrl}/actions/${actionDataToSend.name}`, actionData).reply(200, mockData.createActionResponse);

        // then
        return store.dispatch(combinedActions.createAction(actionDataToSend)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates ACTIONS_FETCHED action', () => {
        // given
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.ACTIONS_FETCHED, actions: mockData.fetchActionsResponse }
        ];
        const store = mockStore({
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: [],
            triggersByName: {},
            isFetching: true,
            isRequestSuccessful: ''
        });

        // when
        axiosMock.onGet(`${config.baseUrl}/actions`).reply(200, mockData.fetchActionsResponse);

        // then
        return store.dispatch(combinedActions.fetchActions()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates ACTION_FETCHED action', () => {
        // given
        const name = 'name-one';
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.ACTION_FETCHED, action: mockData.fetchActionResponse }
        ];
        const store = mockStore({
            actionNames: mockData.actionNamesFetchAction,
            actionsByName: mockData.actionsByNameFetchAction,
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: [],
            triggersByName: {},
            isFetching: true,
            isRequestSuccessful: ''
        });

        // when
        axiosMock.onGet(`${config.baseUrl}/actions/${name}`).reply(200, mockData.fetchActionResponse);

        // then
        return store.dispatch(combinedActions.fetchAction(name)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates ACTION_UPDATED action', () => {
        // given
        const actionDataToSend = {
            name: 'name-one',
            type: 'nodejs:6',
            code: 'console.log(12345)'
        };
        const actionData = prepareAction(actionDataToSend);
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.ACTION_UPDATED, action: mockData.updateActionResponse }
        ];
        const store = mockStore({
            actionNames: mockData.actionNamesUpdateAction,
            actionsByName: mockData.actionsByNameUpdateActionChanged,
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: [],
            triggersByName: {},
            isFetching: true,
            isRequestSuccessful: ''
        });

        // when
        axiosMock.onPut(`${config.baseUrl}/actions/${actionDataToSend.name}?overwrite=true`, actionData).reply(200, mockData.updateActionResponse);

        // then
        return store.dispatch(combinedActions.updateAction(actionDataToSend)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });


    it('creates ACTION_DELETED action', () => {
        // given
        const name = 'name-two';
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.ACTION_DELETED, actionName: name }
        ];
        const store = mockStore({
            actionNames: mockData.actionNamesFetchActions,
            actionsByName: mockData.actionsByNameFetchActions,
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: [],
            triggersByName: {},
            isFetching: true,
            isRequestSuccessful: ''
        });

        // when
        axiosMock.onDelete(`${config.baseUrl}/actions/${name}`).reply(200, mockData.fetchActionResponse);

        // then
        return store.dispatch(combinedActions.deleteAction(name)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});