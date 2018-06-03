import axios from 'axios';
import { config } from '../../../config';
import thunk from 'redux-thunk';
import { startRequestDispatcher } from '../../../store';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import combinedActions from '../../../redux/actions/index';
import { prepareRule } from '../../../redux/actions/rule-actions';
import * as mockData from '../../mock-data-rule';
import * as types from '../../actionTypes';

const middlewares = [startRequestDispatcher, thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe('RuleActions', () => {
    afterEach(() => {
        axiosMock.reset();
    });

    it('creates RULE_CREATED action', () => {
        // given
        const ruleDataToSend = {
            name: 'name-three',
            action: 'action-name',
            trigger: 'trigger-name'
        };
        const ruleData = prepareRule(ruleDataToSend);
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.RULE_CREATED, rule: mockData.createRuleResponse }
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
            isRequestSuccessful: {}
        });

        // when
        axiosMock.onPut(`${config.baseUrl}/rules/${ruleDataToSend.name}`, ruleData).reply(200, mockData.createRuleResponse);

        // then
        return store.dispatch(combinedActions.createRule(ruleDataToSend, 'namespace-one')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates RULES_FETCHED action', () => {
        // given
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.RULES_FETCHED, rules: mockData.fetchRulesResponse }
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
        axiosMock.onGet(`${config.baseUrl}/rules`).reply(200, mockData.fetchRulesResponse);

        // then
        return store.dispatch(combinedActions.fetchRules()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates RULE_FETCHED action', () => {
        // given
        const name = 'name-one';
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.RULE_FETCHED, rule: mockData.fetchRuleResponse }
        ];
        const store = mockStore({
            actionNames: mockData.ruleNamesFetchRule,
            actionsByName: mockData.rulesByNameFetchRule,
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
        axiosMock.onGet(`${config.baseUrl}/rules/${name}`).reply(200, mockData.fetchRuleResponse);

        // then
        return store.dispatch(combinedActions.fetchRule(name)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates RULE_UPDATED action', () => {
        // given
        const ruleDataToSend = {
            name: 'name-one',
            action: 'namespace-one/action-name-2',
            trigger: 'namespace-one/trigger-name'
        };
        const ruleData = prepareRule(ruleDataToSend);
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.RULE_UPDATED, rule: mockData.updateRuleResponse }
        ];
        const store = mockStore({
            actionNames: mockData.ruleNamesUpdateRule,
            actionsByName: mockData.rulesByNameUpdateRuleChanged,
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
        axiosMock.onPut(`${config.baseUrl}/rules/${ruleDataToSend.name}?overwrite=true`, ruleData).reply(200, mockData.updateRuleResponse);

        // then
        return store.dispatch(combinedActions.updateRule(ruleDataToSend)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates RULE_DELETED action', () => {
        // given
        const name = 'name-two';
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.RULE_DELETED, ruleName: name }
        ];
        const store = mockStore({
            actionNames: mockData.ruleNamesFetchRules,
            actionsByName: mockData.rulesByNameFetchRules,
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
        axiosMock.onDelete(`${config.baseUrl}/rules/${name}`).reply(200, mockData.fetchRulesResponse[1]);

        // then
        return store.dispatch(combinedActions.deleteRule(name)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});