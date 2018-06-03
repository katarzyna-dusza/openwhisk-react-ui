import thunk from 'redux-thunk';
import deepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import resourceReducers, * as reducers from '../../../redux/reducers/index';
import * as fromActionReducers from '../../../redux/reducers/action-reducers';
import * as mockData from '../../mock-data-action'
import * as types from '../../actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ActionReducers', () => {
    it('should return the initial state of actions', () => {
        // then
        expect(resourceReducers(undefined, {})).toEqual({
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
            isFetching: false,
            isRequestSuccessful: ''
        });
    });

    it('should handle ACTION_CREATED action', () => {
        // given
        const before = {
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
            isFetching: false,
            isRequestSuccessful: ''
        };
        const after = {
            actionNames: mockData.actionNamesCreateAction,
            actionsByName: mockData.actionsByNameCreateAction,
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: [],
            triggersByName: {},
            isFetching: false,
            isRequestSuccessful: 'ACTION_CREATED'
        };

        // when
        const action = {
            type: types.ACTION_CREATED,
            action: mockData.createActionResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should handle ACTIONS_FETCHED action', () => {
        // given
        const before = {
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
            isFetching: false,
            isRequestSuccessful: ''
        };
        const after = {
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
            isFetching: false,
            isRequestSuccessful: ''
        };

        // when
        const action = {
            type: types.ACTIONS_FETCHED,
            actions: mockData.fetchActionsResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should handle ACTION_FETCHED action', () => {
        // given
        const before = {
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
            isFetching: false,
            isRequestSuccessful: ''
        };
        const after = {
            actionNames: mockData.actionNamesFetchAction,
            actionsByName: mockData.actionsByNameFetchActionExpanded,
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: [],
            triggersByName: {},
            isFetching: false,
            isRequestSuccessful: ''
        };

        // when
        const action = {
            type: types.ACTION_FETCHED,
            action: mockData.fetchActionResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should handle ACTION_UPDATED action', () => {
        // given
        const before = {
            actionNames: mockData.actionNamesUpdateAction,
            actionsByName: mockData.actionsByNameUpdateAction,
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: [],
            triggersByName: {},
            isFetching: false,
            isRequestSuccessful: ''
        };
        const after = {
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
            isFetching: false,
            isRequestSuccessful: 'ACTION_UPDATED'
        };

        // when
        const action = {
            type: types.ACTION_UPDATED,
            action: mockData.updateActionResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should handle ACTION_DELETED action', () => {
        // given
        const before = {
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
            isFetching: false,
            isRequestSuccessful: ''
        };
        const after = {
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
            isFetching: false,
            isRequestSuccessful: ''
        };

        // when
        const action = {
            type: types.ACTION_DELETED,
            actionName: 'name-two'
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should return array of actions', () => {
        // given
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
            isFetching: false,
            isRequestSuccessful: ''
        });
        const state = store.getState();

        // when
        const actions = fromActionReducers.getActions(state);

        // then
        expect(actions).toEqual(mockData.fetchActionsResponse);
    });

    it('should return one action', () => {
        // given
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
            isFetching: false,
            isRequestSuccessful: ''
        });
        const state = store.getState();

        // when
        const action = fromActionReducers.getAction(state, 'name-one');

        // then
        expect(action).toEqual(mockData.fetchActionsResponse[0]);
    });

    it('should return an information about fetching flag', () => {
        // given
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
        const state = store.getState();

        // when
        const isFetchingFlag = reducers.getIsFetching(state);

        // then
        expect(isFetchingFlag).toEqual(true);
    });
});