import React from 'react';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import {
    ruleNamesFetchRule,
    fetchRuleResponse,
    rulesByNameUpdateRuleChanged,
    rulesByNameFetchRuleExpanded
} from '../../../mock-data-rule';
import {
    actionsByNameFetchActions,
    actionNamesFetchActions,
    fetchActionsResponse
} from '../../../mock-data-action';
import {
    triggersByNameFetchTriggers,
    triggerNamesFetchTriggers,
    fetchTriggersResponse
} from '../../../mock-data-trigger';
import { RuleDetailsContainer, mapStateToProps } from '../../../../components/serverless-resources/rule/details/RuleDetailsContainer.jsx';
import RuleCreateUpdate from '../../../../components/serverless-resources/rule/RuleCreateUpdate.jsx';
import Loader from '../../../../components/shared/loader/Loader.jsx';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    match: {
        params: {
            name: 'name-one'
        }
    },
    history: {
        push: sinon.spy()
    },
    ruleName: 'name-one',
    rule: fetchRuleResponse,
    fetchRule: sinon.spy(),
    updateRule: sinon.spy()
};

describe('RuleDetailsContainer component', () => {
    it('renders RuleCreateUpdate component', () => {
        // given
        const initialState = {
            rulesByName: rulesByNameUpdateRuleChanged,
            ruleNames: ruleNamesFetchRule,
            triggersByName: triggersByNameFetchTriggers,
            triggerNames: triggerNamesFetchTriggers,
            actionsByName: actionsByNameFetchActions,
            actionNames: actionNamesFetchActions
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <RuleDetailsContainer
                    {...props}
                />
            </Provider>
        );

        // then
        expect(enzymeWrapper.find(RuleCreateUpdate)).toHaveLength(1);
    });

    it('renders Loader component', () => {
        // given
        const initialState = {
            rulesByName: {},
            ruleNames: [],
            triggersByName: triggersByNameFetchTriggers,
            triggerNames: triggerNamesFetchTriggers,
            actionsByName: actionsByNameFetchActions,
            actionNames: actionNamesFetchActions
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const enzymeWrapper = mount(
            <Provider store={store}>
                <RuleDetailsContainer
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
            rulesByName: rulesByNameFetchRuleExpanded,
            ruleNames: ruleNamesFetchRule,
            triggersByName: triggersByNameFetchTriggers,
            triggerNames: triggerNamesFetchTriggers,
            actionsByName: actionsByNameFetchActions,
            actionNames: actionNamesFetchActions,
            isFetching: false,
            isRequestSuccessful: ''
        };
        const match = {
            params: {
                name: 'name-one'
            }
        };

        // when
        const expectedMapStateToProps = mapStateToProps(initialState, {match});

        // then
        expect(expectedMapStateToProps.ruleName).toBe('name-one');
        expect(expectedMapStateToProps.rule).toEqual(fetchRuleResponse);
        expect(expectedMapStateToProps.actions).toEqual(fetchActionsResponse);
        expect(expectedMapStateToProps.triggers).toEqual(fetchTriggersResponse);
        expect(expectedMapStateToProps.isRequestSuccessful).toEqual('');
    });

    it('should check correctness of mapStateToProps after UPDATE action', () => {
        // given
        const history = {
            push: sinon.spy()
        };
        const initialState = {
            rulesByName: rulesByNameFetchRuleExpanded,
            ruleNames: ruleNamesFetchRule,
            triggersByName: triggersByNameFetchTriggers,
            triggerNames: triggerNamesFetchTriggers,
            actionsByName: actionsByNameFetchActions,
            actionNames: actionNamesFetchActions,
            isFetching: false,
            isRequestSuccessful: 'RULE_UPDATED'
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);

        // when
        const newProps = {
            isRequestSuccessful: 'RULE_UPDATED'
        };
        const enzymeWrapper = mount(
                <RuleDetailsContainer
                    {...props} history={history} store={store}
                />
        );
        enzymeWrapper.setProps(newProps);

        // then
        expect(enzymeWrapper.props().history.push.callCount).toBe(1);
    });
});