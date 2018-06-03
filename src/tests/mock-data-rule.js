export const ruleNamesCreateRule = [
    "name-three"
];

export const rulesByNameCreateRule = {
    "name-three": {
        "name": "name-three",
        "publish": false,
        "annotations": [],
        "version": "0.0.1",
        "status": "active",
        "action": {
            "path": "namespace-one",
            "name": "action-name"
        },
        "namespace": "namespace-one",
        "trigger": {
            "path": "namespace-one",
            "name": "trigger-name"
        }
    }
};

export const createRuleResponse = {
    "action": {
        "path": "namespace-one",
        "name": "action-name"
    },
    "annotations": [],
    "name": "name-three",
    "namespace": "namespace-one",
    "publish": false,
    "status": "active",
    "trigger": {
        "path": "namespace-one",
        "name": "trigger-name"
    },
    "version": "0.0.1"
};

export const ruleNamesFetchRules = [
    "name-one",
    "name-two"
];

export const rulesByNameFetchRules = {
    "name-one": {
        "action": {
            "path": "namespace-one",
            "name": "action-name"
        },
        "trigger": {
            "path": "namespace-one",
            "name": "trigger-name"
        },
        "name": "name-one",
        "namespace": "namespace-one",
        "publish": false,
        "version": "0.0.1",
        "annotations": []
    },
    "name-two": {
        "action": {
            "path": "namespace-one",
            "name": "action-name"
        },
        "trigger": {
            "path": "namespace-one",
            "name": "trigger-name"
        },
        "name": "name-two",
        "namespace": "namespace-one",
        "publish": false,
        "version": "0.0.1",
        "annotations": []
    }
};

export const fetchRulesResponse = [
    {
        "action": {
            "path": "namespace-one",
            "name": "action-name"
        },
        "trigger": {
            "path": "namespace-one",
            "name": "trigger-name"
        },
        "name": "name-one",
        "namespace": "namespace-one",
        "publish": false,
        "version": "0.0.1",
        "annotations": []
    },
    {
        "action": {
            "path": "namespace-one",
            "name": "action-name"
        },
        "trigger": {
            "path": "namespace-one",
            "name": "trigger-name"
        },
        "name": "name-two",
        "namespace": "namespace-one",
        "publish": false,
        "version": "0.0.1",
        "annotations": []
    }
];

export const ruleNamesFetchRule = [
    "name-one"
];

export const rulesByNameFetchRule = {
    "name-one": {
        "name": "name-one",
        "publish": false,
        "annotations": [],
        "version": "0.0.1",
        "namespace": "namespace-one",
        "action": {
            "path": "namespace-one",
            "name": "action-name"
        },
        "trigger": {
            "path": "namespace-one",
            "name": "trigger-name"
        }
    }
};

export const rulesByNameFetchRuleExpanded = {
    "name-one": {
        "name": "name-one",
        "publish": false,
        "annotations": [],
        "version": "0.0.1",
        "status": "active",
        "namespace": "namespace-one",
        "action": {
            "path": "namespace-one",
            "name": "action-name"
        },
        "trigger": {
            "path": "namespace-one",
            "name": "trigger-name"
        }
    }
};

export const fetchRuleResponse = {
    "name": "name-one",
    "publish": false,
    "annotations": [],
    "version": "0.0.1",
    "status": "active",
    "namespace": "namespace-one",
    "action": {
        "path": "namespace-one",
        "name": "action-name"
    },
    "trigger": {
        "path": "namespace-one",
        "name": "trigger-name"
    }
};

export const ruleNamesUpdateRule = [
    "name-one"
];

export const rulesByNameUpdateRule = {
    "name-one": {
        "name": "name-one",
        "publish": false,
        "annotations": [],
        "version": "0.0.2",
        "status": "active",
        "namespace": "namespace-one",
        "action": {
            "path": "namespace-one",
            "name": "action-name-2"
        },
        "trigger": {
            "path": "namespace-one",
            "name": "trigger-name"
        }
    }
};

export const rulesByNameUpdateRuleChanged = {
    "name-one": {
        "name": "name-one",
        "publish": false,
        "annotations": [],
        "version": "0.0.2",
        "status": "active",
        "namespace": "namespace-one",
        "action": {
            "path": "namespace-one",
            "name": "action-name-2"
        },
        "trigger": {
            "path": "namespace-one",
            "name": "trigger-name"
        }
    }
};

export const updateRuleResponse = {
    "name": "name-one",
    "publish": false,
    "annotations": [],
    "version": "0.0.2",
    "status": "active",
    "namespace": "namespace-one",
    "action": {
        "path": "namespace-one",
        "name": "action-name-2"
    },
    "trigger": {
        "path": "namespace-one",
        "name": "trigger-name"
    }
};
