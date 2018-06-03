import axios from 'axios';
import { config } from '../../../config';
import thunk from 'redux-thunk';
import { startRequestDispatcher } from '../../../store';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import combinedActions from '../../../redux/actions/index';
import * as mockData from '../../mock-data-activation';
import * as types from '../../actionTypes';

const middlewares = [startRequestDispatcher, thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe('ActivationActions', () => {
    afterEach(() => {
        axiosMock.reset();
    });

    it('creates ACTIVATIONS_FETCHED action', () => {
        // given
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.ACTIVATIONS_FETCHED, activations: mockData.fetchActivationsResponse }
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
        axiosMock.onGet(`${config.baseUrl}/activations`).reply(200, mockData.fetchActivationsResponse);

        // then
        return store.dispatch(combinedActions.fetchActivations()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates ACTIVATION_FETCHED action', () => {
        // given
        const id = 'name-one';
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.ACTIVATION_FETCHED, activation: mockData.fetchActivationResponse }
        ];
        const store = mockStore({
            actionNames: mockData.activationNamesFetchActivations,
            actionsByName: mockData.activationsByNameFetchActivations,
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
        axiosMock.onGet(`${config.baseUrl}/activations/${id}`).reply(200, mockData.fetchActivationResponse);

        // then
        return store.dispatch(combinedActions.fetchActivation(id)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});