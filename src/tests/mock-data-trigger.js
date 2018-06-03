export const triggerNamesCreateTrigger = [
    "name-three"
];

export const triggersByNameCreateTrigger = {
    "name-three": {
        "annotations": [],
        "name": "name-three",
        "namespace": "namespace-one",
        "publish": false,
        "parameters": [],
        "version": "0.0.1"
    }
};

export const createTriggerResponse = {
    "annotations": [],
    "name": "name-three",
    "namespace": "namespace-one",
    "publish": false,
    "parameters": [],
    "version": "0.0.1"
};

export const triggerNamesFetchTriggers = [
    "name-one",
    "name-two"
];

export const triggersByNameFetchTriggers = {
    "name-one": {
        "name": "name-one",
        "publish": false,
        "annotations": [],
        "version": "0.0.1",
        "updated": 1524598852478,
        "namespace": "namespace-one"
    },
    "name-two": {
        "name": "name-two",
        "publish": false,
        "annotations": [],
        "version": "0.0.1",
        "updated": 1524598852478,
        "namespace": "namespace-one"
    }
};

export const fetchTriggersResponse = [
    {
        "name": "name-one",
        "publish": false,
        "annotations": [],
        "version": "0.0.1",
        "updated": 1524598852478,
        "namespace": "namespace-one"
    },
    {
        "name": "name-two",
        "publish": false,
        "annotations": [],
        "version": "0.0.1",
        "updated": 1524598852478,
        "namespace": "namespace-one"
    }
];

export const triggerNamesFetchTrigger = [
    "name-one"
];

export const triggersByNameFetchTrigger = {
    "name-one": {
        "name": "name-one",
        "publish": false,
        "annotations": [],
        "version": "0.0.1",
        "updated": 1524598852478,
        "namespace": "namespace-one"
    }
};

export const triggersByNameFetchTriggerExpanded = {
    "name-one": {
        "name": "name-one",
        "publish": false,
        "annotations": [],
        "version": "0.0.1",
        "parameters": [],
        "limits": {},
        "namespace": "namespace-one"
    }
};

export const fetchTriggerResponse = {
    "name": "name-one",
    "publish": false,
    "annotations": [],
    "version": "0.0.1",
    "parameters": [],
    "limits": {},
    "namespace": "namespace-one"
};

export const triggerNamesUpdateTrigger = [
    "name-one"
];

export const triggersByNameUpdateTrigger = {
    "name-one": {
        "annotations": [],
        "name": "name-one",
        "namespace": "namespace-one",
        "publish": false,
        "parameters": [
            {
                "key": "name",
                "value": "value"
            }
        ],
        "version": "0.0.1"
    }
};

export const triggersByNameUpdateTriggerChanged = {
    "name-one": {
        "annotations": [],
        "name": "name-one",
        "namespace": "namespace-one",
        "publish": false,
        "parameters": [
            {
                "key": "name",
                "value": "value"
            }
        ],
        "version": "0.0.1"
    }
};

export const updateTriggerResponse = {
    "limits":{},
    "annotations": [],
    "name": "name-one",
    "namespace": "namespace-one",
    "publish": false,
    "parameters": [
        {
            "key": "name",
            "value": "value"
        }
    ],
    "version": "0.0.2"
};

export const fireTriggerResponse = {
    "activationId": "new activation id"
};
