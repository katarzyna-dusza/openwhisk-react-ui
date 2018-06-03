import * as _ from 'lodash';

export const triggerNames = (state = [], action) => {
    switch (action.type) {
        case 'TRIGGER_CREATED':
            return [
                ...state,
                action.trigger.name
            ];
        case 'TRIGGERS_FETCHED':
            return action.triggers.map(trigger => trigger.name);
        case 'TRIGGER_DELETED':
            return _.without(state, action.triggerName);
        default:
            return state;
    }
};

export const triggersByName = (state = {}, action) => {
    switch (action.type) {
        case 'TRIGGER_CREATED':
            return {
                ...state,
                [action.trigger.name]: action.trigger
            };
        case 'TRIGGERS_FETCHED':
            const nextState = {...state};
            action.triggers.forEach(trigger => {
                nextState[trigger.name] = trigger;
            });

            return nextState;
        case 'TRIGGER_FETCHED':
            const next = {...state};
            next[action.trigger.name] = action.trigger;

            return next;
        case 'TRIGGER_UPDATED':
            const tempState = {
                ...state[action.trigger.name],
                parameters: action.trigger.parameters,
                annotations: action.trigger.annotations
            };

            return {
                ...state,
                [action.trigger.name]: tempState
            };
        case 'TRIGGER_DELETED':
            return _.omit(state, [action.triggerName]);
        default:
            return state;
    }
};

export const getTriggers = (state) => {
    const names = state.triggerNames;
    return names.map(name => state.triggersByName[name]);
};

export const getTrigger = (state, name) => {
    return state.triggersByName[name];
};