import thunk from 'redux-thunk';
import deepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import resourceReducers from '../../../redux/reducers/index';
import * as fromActivationReducers from '../../../redux/reducers/activation-reducers';
import * as mockData from '../../mock-data-activation'
import * as types from '../../actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ActivationReducers', () => {
    it('should handle ACTIVATIONS_FETCHED action', () => {
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
            activationNames: mockData.activationNamesFetchActivations,
            activationsByName: mockData.activationsByNameFetchActivations,
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
            type: types.ACTIVATIONS_FETCHED,
            activations: mockData.fetchActivationsResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should handle ACTIVATION_FETCHED action', () => {
        // given
        const before = {
            actionNames: [],
            actionsByName: {},
            activationNames: mockData.activationNamesFetchActivation,
            activationsByName: mockData.activationsByNameFetchActivation,
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
            activationNames: mockData.activationNamesFetchActivation,
            activationsByName: mockData.activationsByNameFetchActivationsExpanded,
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
            type: types.ACTIVATION_FETCHED,
            activation: mockData.fetchActivationResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should return array of activations', () => {
        // given
        const store = mockStore({
            actionNames: [],
            actionsByName: {},
            activationNames: mockData.activationNamesFetchActivations,
            activationsByName: mockData.activationsByNameFetchActivations,
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
        const activations = fromActivationReducers.getActivations(state);

        // then
        expect(activations).toEqual(mockData.fetchActivationsResponse);
    });

    it('should return one activation', () => {
        // given
        const store = mockStore({
            actionNames: [],
            actionsByName: {},
            activationNames: mockData.activationNamesFetchActivation,
            activationsByName: mockData.activationsByNameFetchActivation,
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
        const action = fromActivationReducers.getActivation(state, '123');

        // then
        expect(action).toEqual(mockData.fetchActivationsResponse[0]);
    });
});