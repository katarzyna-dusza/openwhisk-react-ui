import axios from 'axios';
import { config } from '../../config';

const rule_created = (rule) => ({
    type: 'RULE_CREATED',
    rule
});

const rule_fetched = (rule) => ({
    type: 'RULE_FETCHED',
    rule
});

const rules_fetched = (rules) => ({
    type: 'RULES_FETCHED',
    rules
});

const rule_updated = (rule) => ({
    type: 'RULE_UPDATED',
    rule
});

const rule_deleted = (ruleName) => ({
    type: 'RULE_DELETED',
    ruleName
});

export const prepareRule = (rule) => ({
    'trigger': `${config.namespace}/${rule.trigger}`,
    'action': `${config.namespace}/${rule.action}`
});

export const createRule = (rule) => (dispatch) => (
    axios.put(`${config.baseUrl}/rules/${rule.name}`, prepareRule(rule))
        .then(ruleResponse => dispatch(rule_created(ruleResponse)))
        .catch(console.log)
);

export const fetchRules = () => (dispatch) => (
    axios.get(`${config.baseUrl}/rules`)
        .then(rulesResponse => dispatch(rules_fetched(rulesResponse)))
        .catch(console.log)
);

export const fetchRule = (name) => (dispatch) => (
    axios.get(`${config.baseUrl}/rules/${name}`)
        .then(ruleResponse => dispatch(rule_fetched(ruleResponse)))
        .catch(console.log)
);

export const updateRule = (rule) => (dispatch) => (
    axios.put(`${config.baseUrl}/rules/${rule.name}?overwrite=true`, prepareRule(rule))
        .then(ruleResponse => dispatch(rule_updated(ruleResponse)))
        .catch(console.log)
);

export const deleteRule = (name) => (dispatch) => (
    axios.delete(`${config.baseUrl}/rules/${name}`)
        .then(ruleResponse => dispatch(rule_deleted(name)))
        .catch(console.log)
);