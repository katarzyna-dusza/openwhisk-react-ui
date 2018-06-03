import * as _ from 'lodash';

export const actionNames = (state = [], action) => {
    switch (action.type) {
        case 'ACTION_CREATED':
            return [
                ...state,
                action.action.name
            ];
        case 'ACTIONS_FETCHED':
            return action.actions.map(action => action.name);
        case 'ACTION_DELETED':
            return _.without(state, action.actionName);
        default:
            return state;
    }
};

export const actionsByName = (state = {}, action) => {
    switch (action.type) {
        case 'ACTION_CREATED':
            return {
                ...state,
                [action.action.name]: action.action
            };
        case 'ACTIONS_FETCHED':
            const nextState = {...state};
            action.actions.forEach(action => {
                nextState[action.name] = action;
            });

            return nextState;
        case 'ACTION_FETCHED':
            const next = {...state};
            next[action.action.name] = action.action;

            return next;
        case 'ACTION_UPDATED':
            const tempState = {
                ...state[action.action.name],
                exec: action.action.exec,
                version: action.action.version
            };

            return {
                ...state,
                [action.action.name]: tempState
            };
        default:
            return state;
        case 'ACTION_DELETED':
            return _.omit(state, [action.actionName]);
    }
};

export const getActions = (state) => {
    const names = state.actionNames;
    return names.map(name => state.actionsByName[name]);
};

export const getAction = (state, name) => {
    return state.actionsByName[name];
};