export const actionNamesCreateAction = [
    "name-three"
];

export const actionsByNameCreateAction = {
    "name-three": {
        "annotations": [
            {
                "key": "nodejs:6",
                "value": "console.log(1)"
            }
        ],
        "exec": {
            "binary": false,
            "kind": "nodejs:6",
            "code": "console.log(1)"
        },
        "limits": {
            "logs": 10,
            "memory": 256,
            "timeout": 60000
        },
        "name": "name-three",
        "namespace": "namespace-one",
        "publish": false,
        "parameters": [],
        "version": "0.0.1"
    }
};

export const createActionResponse = {
    "annotations": [
        {
            "key": "nodejs:6",
            "value": "console.log(1)"
        }
    ],
    "exec": {
        "binary": false,
        "kind": "nodejs:6",
        "code": "console.log(1)"
    },
    "limits": {
        "logs": 10,
        "memory": 256,
        "timeout": 60000
    },
    "name": "name-three",
    "namespace": "namespace-one",
    "publish": false,
    "parameters": [],
    "version": "0.0.1"
};

export const actionNamesFetchActions = [
    "name-one",
    "name-two"
];

export const actionsByNameFetchActions = {
    "name-one": {
        "annotations": [
            {
                "key": "exec",
                "value": "nodejs:6"
            }
        ],
        "exec": {
            "binary": false
        },
        "limits": {
            "logs": 10,
            "memory": 256,
            "timeout": 60000
        },
        "name": "name-one",
        "namespace": "namespace-one",
        "publish": false,
        "updated": 1521896733518,
        "version": "0.0.1"
    },
    "name-two": {
        "annotations": [
            {
                "key": "exec",
                "value": "nodejs:6"
            }
        ],
        "exec": {
            "binary": false
        },
        "limits": {
            "logs": 10,
            "memory": 256,
            "timeout": 60000
        },
        "name": "name-two",
        "namespace": "namespace-one",
        "publish": false,
        "updated": 1521896733518,
        "version": "0.0.1"
    }
};

export const fetchActionsResponse = [
    {
        "annotations": [
            {
                "key": "exec",
                "value": "nodejs:6"
            }
        ],
        "exec": {
            "binary": false
        },
        "limits": {
            "logs": 10,
            "memory": 256,
            "timeout": 60000
        },
        "name": "name-one",
        "namespace": "namespace-one",
        "publish": false,
        "updated": 1521896733518,
        "version": "0.0.1"
    },
    {
        "annotations": [
            {
                "key": "exec",
                "value": "nodejs:6"
            }
        ],
        "exec": {
            "binary": false
        },
        "limits": {
            "logs": 10,
            "memory": 256,
            "timeout": 60000
        },
        "name": "name-two",
        "namespace": "namespace-one",
        "publish": false,
        "updated": 1521896733518,
        "version": "0.0.1"
    }
];

export const actionNamesFetchAction = [
    "name-one"
];

export const actionsByNameFetchAction = {
    "name-one": {
        "annotations": [
            {
                "key": "exec",
                "value": "nodejs:6"
            }
        ],
        "exec": {
            "binary": false
        },
        "limits": {
            "logs": 10,
            "memory": 256,
            "timeout": 60000
        },
        "name": "name-one",
        "namespace": "namespace-one",
        "publish": false,
        "updated": 1521896733518,
        "version": "0.0.1"
    }
};

export const actionsByNameFetchActionExpanded = {
    "name-one": {
        "annotations": [
            {
                "key": "nodejs:6",
                "value": "console.log(1)"
            }
        ],
        "exec": {
            "binary": false,
            "kind": "nodejs:6",
            "code": "console.log(1)"
        },
        "limits": {
            "logs": 10,
            "memory": 256,
            "timeout": 60000
        },
        "name": "name-one",
        "namespace": "namespace-one",
        "publish": false,
        "parameters": [],
        "version": "0.0.1"
    }
};

export const fetchActionResponse = {
    "annotations": [
        {
            "key": "nodejs:6",
            "value": "console.log(1)"
        }
    ],
    "exec": {
        "binary": false,
        "kind": "nodejs:6",
        "code": "console.log(1)"
    },
    "limits": {
        "logs": 10,
        "memory": 256,
        "timeout": 60000
    },
    "name": "name-one",
    "namespace": "namespace-one",
    "publish": false,
    "parameters": [],
    "version": "0.0.1"
};

export const actionNamesUpdateAction = [
    "name-one"
];

export const actionsByNameUpdateAction = {
    "name-one": {
        "annotations": [
            {
                "key": "exec",
                "value": "nodejs:6"
            }
        ],
        "exec": {
            "binary": false,
            "kind": "nodejs:6",
            "code": "console.log(1)"
        },
        "limits": {
            "logs": 10,
            "memory": 256,
            "timeout": 60000
        },
        "name": "name-one",
        "namespace": "namespace-one",
        "publish": false,
        "parameters": [],
        "version": "0.0.1"
    }
};

export const actionsByNameUpdateActionChanged = {
    "name-one": {
        "annotations": [
            {
                "key": "exec",
                "value": "nodejs:6"
            }
        ],
        "exec": {
            "binary": false,
            "kind": "nodejs:6",
            "code": "console.log(12345)"
        },
        "limits": {
            "logs": 10,
            "memory": 256,
            "timeout": 60000
        },
        "name": "name-one",
        "namespace": "namespace-one",
        "publish": false,
        "parameters": [],
        "version": "0.0.2"
    }
};

export const updateActionResponse = {
    "annotations": [
        {
            "key": "exec",
            "value": "nodejs:6"
        }
    ],
    "exec": {
        "binary": false,
        "kind": "nodejs:6",
        "code": "console.log(12345)"
    },
    "limits": {
        "logs": 10,
        "memory": 256,
        "timeout": 60000
    },
    "name": "name-one",
    "namespace": "namespace-one",
    "publish": false,
    "parameters": [],
    "version": "0.0.2"
};
