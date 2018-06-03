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
    rulesByNameFetchRules,
    ruleNamesFetchRules,
    fetchRulesResponse
} from '../../../mock-data-rule';
import { RuleListContainer, mapStateToProps } from '../../../../components/serverless-resources/rule/list/RuleListContainer.jsx';
import RuleList from '../../../../components/serverless-resources/rule/list/RuleList.jsx'
import Loader from '../../../../components/shared/loader/Loader.jsx';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    rules: fetchRulesResponse,
    fetchRules: sinon.spy(),
    deleteRule: sinon.spy()
};

describe('RuleListContainer component', () => {
    it('renders List component', () => {
        // given
        const initialState = {
            rulesByName: rulesByNameFetchRules,
            ruleNames: ruleNamesFetchRules,
            isFetching: false
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RuleListContainer
                        {...props}
                    />
                </MemoryRouter>
            </Provider>
        );

        // then
        expect(enzymeWrapper.find(RuleList)).toHaveLength(1);
    });

    it('renders Loader component', () => {
        // given
        const initialState = {
            rulesByName: {},
            ruleNames: [],
            isFetching: true
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RuleListContainer
                        {...props}
                    />
                </MemoryRouter>
            </Provider>
        );

        // then
        expect(enzymeWrapper.find(Loader)).toHaveLength(1);
    });

    it('should check correctness of mapStateToProps', () => {
        // given
        const initialState = {
            rulesByName: rulesByNameFetchRules,
            ruleNames: ruleNamesFetchRules,
            isFetching: false
        };

        // when
        const expectedMapStateToProps = mapStateToProps(initialState, {});

        // then
        expect(expectedMapStateToProps.rules).toEqual(fetchRulesResponse);
        expect(expectedMapStateToProps.isFetching).toBeFalsy();
    });
});