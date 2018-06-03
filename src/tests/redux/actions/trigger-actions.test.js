import axios from 'axios';
import { config } from '../../../config';
import thunk from 'redux-thunk';
import { startRequestDispatcher } from '../../../store';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import combinedActions from '../../../redux/actions/index';
import { prepareTrigger } from '../../../redux/actions/trigger-actions';
import * as mockData from '../../mock-data-trigger';
import * as types from '../../actionTypes';

const middlewares = [startRequestDispatcher, thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe('TriggerActions', () => {
    afterEach(() => {
        axiosMock.reset();
    });

    it('creates TRIGGER_CREATED action', () => {
        // given
        const triggerDataToSend = {
            name: 'name-three',
            package: [],
            parameters: ''
        };
        const triggerData = prepareTrigger(triggerDataToSend);
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.TRIGGER_CREATED, trigger: mockData.createTriggerResponse }
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
            isFetching: false,
            isRequestSuccessful: {}
        });

        // when
        axiosMock.onPut(`${config.baseUrl}/triggers/${triggerDataToSend.name}`, triggerData).reply(200, mockData.createTriggerResponse);

        // then
        return store.dispatch(combinedActions.createTrigger(triggerDataToSend)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates TRIGGERS_FETCHED action', () => {
        // given
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.TRIGGERS_FETCHED, triggers: mockData.fetchTriggersResponse }
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
        axiosMock.onGet(`${config.baseUrl}/triggers`).reply(200, mockData.fetchTriggersResponse);

        // then
        return store.dispatch(combinedActions.fetchTriggers()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates TRIGGER_FETCHED action', () => {
        // given
        const name = 'name-one';
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.TRIGGER_FETCHED, trigger: mockData.fetchTriggerResponse }
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
            triggerNames: mockData.triggerNamesFetchTrigger,
            triggersByName: mockData.triggersByNameFetchTrigger,
            isFetching: true,
            isRequestSuccessful: ''
        });

        // when
        axiosMock.onGet(`${config.baseUrl}/triggers/${name}`).reply(200, mockData.fetchTriggerResponse);

        // then
        return store.dispatch(combinedActions.fetchTrigger(name)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates TRIGGER_UPDATED action', () => {
        // given
        const triggerDataToSend = {
            name: 'name-three',
            package: [],
            parameters: '[{"key": "name", "value": "Some Name"}]'
        };
        const triggerData = prepareTrigger(triggerDataToSend);
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.TRIGGER_UPDATED, trigger: mockData.updateTriggerResponse }
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
            triggerNames: mockData.triggerNamesUpdateTrigger,
            triggersByName: mockData.triggersByNameUpdateTriggerChanged,
            isFetching: false,
            isRequestSuccessful: ''
        });

        // when
        axiosMock.onPut(`${config.baseUrl}/triggers/${triggerDataToSend.name}?overwrite=true`, triggerData).reply(200, mockData.updateTriggerResponse);

        // then
        return store.dispatch(combinedActions.updateTrigger(triggerDataToSend)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });


    it('creates TRIGGER_DELETED action', () => {
        // given
        const name = 'name-two';
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.TRIGGER_DELETED, triggerName: name }
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
            triggerNames: mockData.triggerNamesFetchTriggers,
            triggersByName: mockData.triggersByNameFetchTriggers,
            isFetching: true,
            isRequestSuccessful: ''
        });

        // when
        axiosMock.onDelete(`${config.baseUrl}/triggers/${name}`).reply(200, mockData.fetchTriggersResponse[1]);

        // then
        return store.dispatch(combinedActions.deleteTrigger(name)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates TRIGGER_FIRED action', () => {
        // given
        const name = 'name-two';
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.TRIGGER_FIRED, triggerName: name }
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
            triggerNames: mockData.triggerNamesFetchTriggers,
            triggersByName: mockData.triggersByNameFetchTriggers,
            isFetching: true,
            isRequestSuccessful: ''
        });

        // when
        axiosMock.onPost(`${config.baseUrl}/triggers/${name}`, {}).reply(200, mockData.fireTriggerResponse);

        // then
        return store.dispatch(combinedActions.fireTrigger(name)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});