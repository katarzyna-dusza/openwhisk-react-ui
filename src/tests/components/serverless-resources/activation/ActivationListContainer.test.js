import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import {
    activationsByNameFetchActivations,
    activationNamesFetchActivations,
    fetchActivationsResponse
} from '../../../mock-data-activation';
import { ActivationListContainer, mapStateToProps } from '../../../../components/serverless-resources/activation/list/ActivationListContainer.jsx';
import ActivationList from '../../../../components/serverless-resources/activation/list/ActivationList.jsx';
import Loader from '../../../../components/shared/loader/Loader.jsx';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    fetchActivations: sinon.spy(),
    activations: fetchActivationsResponse
};

describe('ActivationListContainer component', () => {
    it('renders List component', () => {
        // given
        const initialState = {
            activationsByName: activationsByNameFetchActivations,
            activationNames: activationNamesFetchActivations,
            isFetching: false
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ActivationListContainer
                        {...props}
                    />
                </MemoryRouter>
            </Provider>
        );

        // then
        expect(enzymeWrapper.find(ActivationList)).toHaveLength(1);
    });

    it('renders Loader component', () => {
        // given
        const initialState = {
            activationsByName: {},
            activationNames: [],
            isFetching: true
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <ActivationListContainer
                    {...props}
                />
            </Provider>
        );

        // then
        expect(enzymeWrapper.find(Loader)).toHaveLength(1);
    });

    it('should check correctness of mapStateToProps', () => {
        // given
        const initialState = {
            activationsByName: activationsByNameFetchActivations,
            activationNames: activationNamesFetchActivations,
            isFetching: false
        };

        // when
        const expectedMapStateToProps = mapStateToProps(initialState, {});

        // then
        expect(expectedMapStateToProps.activations).toEqual(fetchActivationsResponse);
        expect(expectedMapStateToProps.isFetching).toBeFalsy();
    });
});