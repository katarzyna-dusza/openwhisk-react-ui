export const packageNames = (state = [], action) => {
    switch (action.type) {
        case 'PACKAGES_FETCHED':
            return action.packages.map(packageTrigger => packageTrigger.name);
        default:
            return state;
    }
};

export const packagesByName = (state = {}, action) => {
    switch (action.type) {
        case 'PACKAGES_FETCHED':
            const nextState = {...state};
            action.packages.forEach(packageTrigger => {
                nextState[packageTrigger.name] = packageTrigger;
            });

            return nextState;
        default:
            return state;
    }
};

export const getPackages = (state) => {
    const names = state.packageNames;
    return names.map(name => state.packagesByName[name]);
};