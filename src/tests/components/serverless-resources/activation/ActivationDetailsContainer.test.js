import React from 'react';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import {
    activationsByNameFetchActivationsExpanded,
    activationNamesFetchActivation,
    activationsByNameFetchActivation,
    fetchActivationResponse
} from '../../../mock-data-activation';
import { ActivationDetailsContainer, mapStateToProps } from '../../../../components/serverless-resources/activation/details/ActivationDetailsContainer.jsx';
import ActivationDetails from '../../../../components/serverless-resources/activation/details/ActivationDetails.jsx';
import Loader from '../../../../components/shared/loader/Loader.jsx';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    match: {
        params: {
            id: '123'
        }
    },
    history: {
        push: sinon.spy()
    },
    activation: {},
    activationId: '123',
    fetchActivation: sinon.spy(),
    isRequestSuccessful: ''
};

describe('ActivationDetailsContainer component', () => {
    it('renders ActivationDetails component', () => {
        // given
        const initialState = {
            activationsByName: activationsByNameFetchActivationsExpanded,
            activationNames: activationNamesFetchActivation
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <ActivationDetailsContainer
                    {...props}
                />
            </Provider>
        );

        // then
        expect(enzymeWrapper.find(ActivationDetails)).toHaveLength(1);
    });

    it('renders Loader component', () => {
        // given
        const initialState = {
            activationsByName: activationsByNameFetchActivation,
            activationNames: activationNamesFetchActivation
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <ActivationDetailsContainer
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
            activationsByName: activationsByNameFetchActivationsExpanded,
            activationNames: activationNamesFetchActivation,
            isFetching: false
        };
        const match = {
            params: {
                id: '123'
            }
        };

        // when
        const expectedMapStateToProps = mapStateToProps(initialState, {match});

        // then
        expect(expectedMapStateToProps.activationId).toBe('123');
        expect(expectedMapStateToProps.activation).toEqual(fetchActivationResponse);
    });
});