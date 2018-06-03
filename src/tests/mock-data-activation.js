export const activationNamesFetchActivations = [
    "123",
    "456"
];

export const activationsByNameFetchActivations = {
    "123": {
        "activationId": "123",
        "annotations": [],
        "start": 1524307,
        "name": "name-one",
        "namespace": "namespace-one",
        "publish": false,
        "version": "0.0.1"
    },
    "456": {
        "activationId": "456",
        "annotations": [],
        "start": 1524307,
        "name": "name-two",
        "namespace": "namespace-one",
        "publish": false,
        "version": "0.0.1"
    }
};

export const fetchActivationsResponse = [
    {
        "activationId": "123",
        "annotations": [],
        "start": 1524307,
        "name": "name-one",
        "namespace": "namespace-one",
        "publish": false,
        "version": "0.0.1"
    },
    {
        "activationId": "456",
        "annotations": [],
        "start": 1524307,
        "name": "name-two",
        "namespace": "namespace-one",
        "publish": false,
        "version": "0.0.1"
    }
];

export const activationNamesFetchActivation = [
    "123"
];

export const activationsByNameFetchActivation = {
    "123": {
        "name": "name-one",
        "activationId": "123",
        "publish": false,
        "annotations": [],
        "version": "0.0.1",
        "start": 1524307,
        "namespace": "namespace-one"
    }
};

export const activationsByNameFetchActivationsExpanded = {
    "123": {
        "name": "name-one",
        "subject": "subject",
        "activationId": "123",
        "publish": false,
        "annotations": [],
        "version": "0.0.1",
        "response": {
            "result": {},
            "success": true,
            "status": "success"
        },
        "logs": [
            "{\"statusCode\":1\"}"
        ],
        "start": 1524307,
        "namespace": "namespace-one"
    }
};

export const fetchActivationResponse = {
    "name": "name-one",
    "subject": "subject",
    "activationId": "123",
    "publish": false,
    "annotations": [],
    "version": "0.0.1",
    "response": {
        "result": {},
        "success": true,
        "status": "success"
    },
    "logs": [
        "{\"statusCode\":1\"}"
    ],
    "start": 1524307,
    "namespace": "namespace-one"
};
