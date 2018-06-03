import thunk from 'redux-thunk';
import deepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store';
import resourceReducers from '../../../redux/reducers/index';
import * as fromPackageReducers from '../../../redux/reducers/package-reducers';
import * as mockData from '../../mock-data-package'
import * as types from '../../actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('PackageReducers', () => {
    it('should handle PACKAGES_FETCHED action', () => {
        // given
        const before = {
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: [],
            packagesByName: {},
            ruleNames: [],
            rulesByName: {},
            triggerNames: [],
            triggersByName: {},
            isFetching: false,
            isRequestSuccessful: ''
        };
        const after = {
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: mockData.packageNamesFetchPackages,
            packagesByName: mockData.packagesByNameFetchPackages,
            ruleNames: [],
            rulesByName: {},
            triggerNames: [],
            triggersByName: {},
            isFetching: false,
            isRequestSuccessful: ''
        };

        // when
        const action = {
            type: types.PACKAGES_FETCHED,
            packages: mockData.fetchPackagesResponse
        };

        // then
        deepFreeze(before);
        expect(resourceReducers(before, action)).toEqual(after);
    });

    it('should return array of packages', () => {
        // given
        const store = mockStore({
            actionNames: [],
            actionsByName: {},
            activationNames: [],
            activationsByName: {},
            packageNames: mockData.packageNamesFetchPackages,
            packagesByName: mockData.packagesByNameFetchPackages,
            ruleNames: [],
            rulesByName: {},
            triggerNames: [],
            triggersByName: {},
            isFetching: false,
            isRequestSuccessful: ''
        });
        const state = store.getState();

        // when
        const packages = fromPackageReducers.getPackages(state);

        // then
        expect(packages).toEqual(mockData.fetchPackagesResponse);
    });
});