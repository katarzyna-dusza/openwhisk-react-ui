import * as _ from 'lodash';

export const ruleNames = (state = [], action) => {
    switch (action.type) {
        case 'RULE_CREATED':
            return [
                ...state,
                action.rule.name
            ];
        case 'RULES_FETCHED':
            return action.rules.map(rule => rule.name);
        case 'RULE_DELETED':
            return _.without(state, action.ruleName);
        default:
            return state;
    }
};

export const rulesByName = (state = {}, action) => {
    switch (action.type) {
        case 'RULE_CREATED':
            return {
                ...state,
                [action.rule.name]: action.rule
            };
        case 'RULES_FETCHED':
            const nextState = {...state};
            action.rules.forEach(rule => {
                nextState[rule.name] = rule;
            });

            return nextState;
        case 'RULE_FETCHED':
            const next = {...state};
            next[action.rule.name] = action.rule;

            return next;
        case 'RULE_UPDATED':
            const tempState = {
                ...state[action.rule.name],
                trigger: action.rule.trigger,
                action: action.rule.action
            };

            return {
                ...state,
                [action.rule.name]: tempState
            };
        case 'RULE_DELETED':
            return _.omit(state, [action.ruleName]);
        default:
            return state;
    }
};

export const getRules = (state) => {
    const names = state.ruleNames;
    return names.map(name => state.rulesByName[name]);
};

export const getRule = (state, name) => {
    return state.rulesByName[name];
};