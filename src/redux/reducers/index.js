import { combineReducers } from 'redux';
import * as fromActionReducers from './action-reducers';
import * as fromActivationReducers from './activation-reducers';
import * as fromTriggerReducers from './trigger-reducers';
import * as fromPackageReducers from './package-reducers';
import * as fromRuleReducers from './rule-reducers';
import * as _ from 'lodash';

export const isFetching = (state = false, action) => action.type == 'START_REQUEST';

export const isRequestSuccessful = (state = '', action) => {
    if (_.endsWith(action.type, 'CREATED') || _.endsWith(action.type, 'UPDATED')) {
        return action.type;
    }

    return '';
};

export const getIsFetching = (state) => {
    return state.isFetching;
};

export const getIsRequestSuccessful = (state) => {
    return state.isRequestSuccessful;
};

const resourceReducers = combineReducers({
    actionsByName: fromActionReducers.actionsByName,
    actionNames: fromActionReducers.actionNames,
    activationsByName: fromActivationReducers.activationsByName,
    activationNames: fromActivationReducers.activationNames,
    triggersByName: fromTriggerReducers.triggersByName,
    triggerNames: fromTriggerReducers.triggerNames,
    ruleNames: fromRuleReducers.ruleNames,
    rulesByName: fromRuleReducers.rulesByName,
    packageNames: fromPackageReducers.packageNames,
    packagesByName: fromPackageReducers.packagesByName,
    isFetching,
    isRequestSuccessful
});

export default resourceReducers;