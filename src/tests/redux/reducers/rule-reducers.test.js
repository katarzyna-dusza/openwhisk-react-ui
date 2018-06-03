import thunk from 'redux-thunk';
import deepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import resourceReducers from '../../../redux/reducers/index';
import * as fromRuleReducers from '../../../redux/reducers/rule-reducers';
import * as mockData from '../../mock-data-rule'
import * as types from '../../actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('RuleReducers', () => {
    it('should handle RULE_CREATED action', () => {
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
            ruleNames: mockData.ruleNamesCreateRule,
            rulesByName: mockData.rulesByNameCreateRule,
            triggerNames: [],
            triggersByName: {},
            isFetching: false,
            isRequestSuccessful: 'RULE_CREATED'
        };

        // when
        const action = {
            type: types.RULE_CREATED,
            rule: mockData.createRuleResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should handle RULES_FETCHED action', () => {
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
            ruleNames: mockData.ruleNamesFetchRules,
            rulesByName: mockData.rulesByNameFetchRules,
            triggerNames: [],
            triggersByName: {},
            isFetching: false,
            isRequestSuccessful: ''
        };

        // when
        const action = {
            type: types.RULES_FETCHED,
            rules: mockData.fetchRulesResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should handle RULE_FETCHED action', () => {
        // given
        const before = {
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: mockData.ruleNamesFetchRule,
            rulesByName: mockData.rulesByNameFetchRule,
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
            ruleNames: mockData.ruleNamesFetchRule,
            rulesByName: mockData.rulesByNameFetchRuleExpanded,
            triggerNames: [],
            triggersByName: {},
            isFetching: false,
            isRequestSuccessful: ''
        };

        // when
        const action = {
            type: types.RULE_FETCHED,
            rule: mockData.fetchRuleResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should handle RULE_UPDATED action', () => {
        // given
        const before = {
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: mockData.ruleNamesUpdateRule,
            rulesByName: mockData.rulesByNameUpdateRule,
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
            ruleNames: mockData.ruleNamesUpdateRule,
            rulesByName: mockData.rulesByNameUpdateRuleChanged,
            triggerNames: [],
            triggersByName: {},
            isFetching: false,
            isRequestSuccessful: 'RULE_UPDATED'
        };

        // when
        const action = {
            type: types.RULE_UPDATED,
            rule: mockData.updateRuleResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should handle RULE_DELETED action', () => {
        // given
        const before = {
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: mockData.ruleNamesFetchRules,
            rulesByName: mockData.rulesByNameFetchRules,
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
            ruleNames: mockData.ruleNamesFetchRule,
            rulesByName: mockData.rulesByNameFetchRule,
            triggerNames: [],
            triggersByName: {},
            isFetching: false,
            isRequestSuccessful: ''
        };

        // when
        const action = {
            type: types.RULE_DELETED,
            ruleName: 'name-two'
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should return array of rules', () => {
        // given
        const store = mockStore({
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: mockData.ruleNamesFetchRules,
            rulesByName: mockData.rulesByNameFetchRules,
            triggerNames: [],
            triggersByName: {},
            isFetching: false,
            isRequestSuccessful: ''
        });
        const state = store.getState();

        // when
        const rules = fromRuleReducers.getRules(state);

        // then
        expect(rules).toEqual(mockData.fetchRulesResponse);
    });

    it('should return one rule', () => {
        // given
        const store = mockStore({
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: mockData.ruleNamesFetchRules,
            rulesByName: mockData.rulesByNameFetchRules,
            triggerNames: [],
            triggersByName: {},
            isFetching: false,
            isRequestSuccessful: ''
        });
        const state = store.getState();

        // when
        const rule = fromRuleReducers.getRule(state, 'name-one');

        // then
        expect(rule).toEqual(mockData.fetchRulesResponse[0]);
    });
});