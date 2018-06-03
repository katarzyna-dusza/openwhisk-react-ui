import thunk from 'redux-thunk';
import deepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import resourceReducers from '../../../redux/reducers/index';
import * as fromTriggerReducers from '../../../redux/reducers/trigger-reducers';
import * as mockData from '../../mock-data-trigger'
import * as types from '../../actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('TriggerReducers', () => {
    it('should handle TRIGGER_CREATED action', () => {
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
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: mockData.triggerNamesCreateTrigger,
            triggersByName: mockData.triggersByNameCreateTrigger,
            isFetching: false,
            isRequestSuccessful: 'TRIGGER_CREATED'
        };

        // when
        const action = {
            type: types.TRIGGER_CREATED,
            trigger: mockData.createTriggerResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should handle TRIGGERS_FETCHED action', () => {
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
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: mockData.triggerNamesFetchTriggers,
            triggersByName: mockData.triggersByNameFetchTriggers,
            isFetching: false,
            isRequestSuccessful: ''
        };

        // when
        const action = {
            type: types.TRIGGERS_FETCHED,
            triggers: mockData.fetchTriggersResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should handle TRIGGER_FETCHED action', () => {
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
            triggerNames: mockData.triggerNamesFetchTrigger,
            triggersByName: mockData.triggersByNameFetchTrigger,
            isFetching: false,
            isRequestSuccessful: ''
        };
        const after = {
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: mockData.triggerNamesFetchTrigger,
            triggersByName: mockData.triggersByNameFetchTriggerExpanded,
            isFetching: false,
            isRequestSuccessful: ''
        };

        // when
        const action = {
            type: types.TRIGGER_FETCHED,
            trigger: mockData.fetchTriggerResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should handle TRIGGER_UPDATED action', () => {
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
            triggerNames: mockData.triggerNamesUpdateTrigger,
            triggersByName: mockData.triggersByNameUpdateTrigger,
            isFetching: false,
            isRequestSuccessful: ''
        };
        const after = {
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: mockData.triggerNamesUpdateTrigger,
            triggersByName: mockData.triggersByNameUpdateTriggerChanged,
            isFetching: false,
            isRequestSuccessful: 'TRIGGER_UPDATED'
        };

        // when
        const action = {
            type: types.TRIGGER_UPDATED,
            trigger: mockData.updateTriggerResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should handle TRIGGER_DELETED action', () => {
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
            triggerNames: mockData.triggerNamesFetchTriggers,
            triggersByName: mockData.triggersByNameFetchTriggers,
            isFetching: false,
            isRequestSuccessful: ''
        };
        const after = {
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: mockData.triggerNamesFetchTrigger,
            triggersByName: mockData.triggersByNameFetchTrigger,
            isFetching: false,
            isRequestSuccessful: ''
        };

        // when
        const action = {
            type: types.TRIGGER_DELETED,
            triggerName: 'name-two'
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should return array of triggers', () => {
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
            triggerNames: mockData.triggerNamesFetchTriggers,
            triggersByName: mockData.triggersByNameFetchTriggers,
            isFetching: false,
            isRequestSuccessful: ''
        });
        const state = store.getState();

        // when
        const triggers = fromTriggerReducers.getTriggers(state);

        // then
        expect(triggers).toEqual(mockData.fetchTriggersResponse);
    });

    it('should return one trigger', () => {
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
            triggerNames: mockData.triggerNamesFetchTriggers,
            triggersByName: mockData.triggersByNameFetchTriggers,
            isFetching: false,
            isRequestSuccessful: ''
        });
        const state = store.getState();

        // when
        const trigger = fromTriggerReducers.getTrigger(state, 'name-one');

        // then
        expect(trigger).toEqual(mockData.fetchTriggersResponse[0]);
    });
});