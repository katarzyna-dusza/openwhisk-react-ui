import axios from 'axios';
import { config } from '../../../config';
import thunk from 'redux-thunk';
import { startRequestDispatcher } from '../../../store';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import combinedActions from '../../../redux/actions/index';
import * as mockData from '../../mock-data-package';
import * as types from '../../actionTypes';

const middlewares = [startRequestDispatcher, thunk];
const mockStore = configureMockStore(middlewares);
const axiosMock = new MockAdapter(axios);

describe('PackageActions', () => {
    afterEach(() => {
        axiosMock.reset();
    });

    it('creates PACKAGES_FETCHED action', () => {
        // given
        const expectedActions = [
            { type: types.START_REQUEST },
            { type: types.PACKAGES_FETCHED, packages: mockData.fetchPackagesResponse }
        ];
        const store = mockStore({
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
            isFetching: true,
            isRequestSuccessful: ''
        });

        // when
        axiosMock.onGet(`${config.baseUrl}/packages`).reply(200, mockData.fetchPackagesResponse);

        // then
        return store.dispatch(combinedActions.fetchPackages()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});