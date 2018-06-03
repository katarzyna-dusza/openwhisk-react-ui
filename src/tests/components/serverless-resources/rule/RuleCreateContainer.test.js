import React from 'react';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
import { actionsByNameFetchAction, actionNamesFetchAction } from '../../../mock-data-action';
import { triggersByNameFetchTrigger, triggerNamesFetchTrigger } from '../../../mock-data-trigger';
import { RuleCreateContainer } from '../../../../components/serverless-resources/rule/create/RuleCreateContainer.jsx';
import RuleCreateUpdate from '../../../../components/serverless-resources/rule/RuleCreateUpdate.jsx';

Enzyme.configure({ adapter: new Adapter() });

// given
const initialState = {
    isRequestSuccessful: '',
    triggersByName: {},
    triggerNames: [],
    actionsByName: {},
    actionNames: []
};
const props = {
    triggers: [],
    actions: [],
    createRule: sinon.spy(),
    isRequestSuccessful: ''
};
const mockStore = configureStore([thunk, promise]);
const store = mockStore(initialState);

describe('RuleCreateContainer component', () => {
    it('renders RuleCreateUpdate component', () => {
        // when
        const enzymeWrapper = shallow(<RuleCreateContainer store={store} {...props} />).dive();

        // then
        expect(enzymeWrapper.find(RuleCreateUpdate)).toHaveLength(1);
    });

    it('renders RuleCreateUpdate component with the right props', () => {
        // when
        const enzymeWrapper = shallow(<RuleCreateContainer store={store} {...props} />).dive();

        // then
        expect(enzymeWrapper.find(RuleCreateUpdate).props().title).toBe('New Rule');
        expect(enzymeWrapper.find(RuleCreateUpdate).props().save).toBeDefined();
    });

    it('should check correctness of mapStateToProps after CREATE action', () => {
        // given
        const history = {
            push: sinon.spy()
        };
        const initialState = {
            isFetching: false,
            isRequestSuccessful: 'RULE_CREATED',
            triggersByName: triggersByNameFetchTrigger,
            triggerNames: triggerNamesFetchTrigger,
            actionsByName: actionsByNameFetchAction,
            actionNames: actionNamesFetchAction
        };
        const mockStore = configureStore([thunk, promise]);
        const store = mockStore(initialState);
        const props = {
            history: {
                push: sinon.spy()
            },
            createRule: sinon.spy()
        };

        // when
        const newProps = {
            isRequestSuccessful: 'RULE_CREATED'
        };
        const enzymeWrapper = mount(
            <RuleCreateContainer
                {...props} history={history} store={store}
            />
        );
        enzymeWrapper.setProps(newProps);

        // then
        expect(enzymeWrapper.props().history.push.callCount).toBe(1);
    });
});