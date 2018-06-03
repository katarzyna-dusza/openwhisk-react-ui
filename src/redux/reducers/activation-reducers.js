export const activationNames = (state = [], action) => {
    switch (action.type) {
        case 'ACTIVATIONS_FETCHED':
            return action.activations.map(activation => activation.activationId);
        default:
            return state;
    }
};

export const activationsByName = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVATIONS_FETCHED':
            const nextState = {...state};
            action.activations.forEach(activation => {
                nextState[activation.activationId] = activation;
            });

            return nextState;
        case 'ACTIVATION_FETCHED':
            const next = {...state};
            next[action.activation.activationId] = action.activation;

            return next;
        default:
            return state;
    }
};

export const getActivations = (state) => {
    const names = state.activationNames;
    return names.map(name => state.activationsByName[name]);
};

export const getActivation = (state, id) => {
    return state.activationsByName[id];
};