export const packageNamesFetchPackages = [
    "git"
];

export const packagesByNameFetchPackages = {
    "git": {
        "name": "git",
        "binding": {
            "namespace": "whisk.system",
            "name": "github"
        },
        "publish": false,
        "annotations": [
            {
                "key": "binding",
                "value": {
                    "namespace": "whisk.system",
                    "name": "github"
                }
            }
        ],
        "version": "0.0.1",
        "namespace": "namespace-one",
        "updated": 1518889065081
    }
};

export const fetchPackagesResponse = [{
    "name": "git",
    "binding": {
        "namespace": "whisk.system",
        "name": "github"
    },
    "publish": false,
    "annotations": [
        {
            "key": "binding",
            "value": {
                "namespace": "whisk.system",
                "name": "github"
            }
        }
    ],
    "version": "0.0.1",
    "updated": 1518889065081,
    "namespace": "namespace-one"
}];