import React, { Component } from 'react';
import { connect } from 'react-redux';
import RuleCreateUpdate from '../RuleCreateUpdate.jsx';
import combinedActions from '../../../../redux/actions/index';
import * as actionReducers from '../../../../redux/reducers/action-reducers';
import * as triggerReducers from '../../../../redux/reducers/trigger-reducers';
import * as reducers from '../../../../redux/reducers/index';

export class RuleCreateContainer extends Component {
    componentDidUpdate() {
        const { isRequestSuccessful, history } = this.props;

        if ('RULE_CREATED' === isRequestSuccessful) {
            history.push('/rule-list');
        }
    }

    componentDidMount() {
        const { fetchActions, fetchTriggers } = this.props;
        fetchActions();
        fetchTriggers();
    }

    render() {
        const title = 'New Rule';
        const { createRule, actions, triggers, history } = this.props;
        const disabledInputs = [];

        return (
            <RuleCreateUpdate title={title}
                              actions={actions}
                              triggers={triggers}
                              save={createRule}
                              isCreateView={true}
                              disabledInputs={disabledInputs}
                              history={history}
            />
        )
    }
}

export const mapStateToProps = (state, { history }) => ({
    actions: actionReducers.getActions(state),
    triggers: triggerReducers.getTriggers(state),
    isRequestSuccessful: reducers.getIsRequestSuccessful(state)
});

RuleCreateContainer = connect(
    mapStateToProps,
    combinedActions
)(RuleCreateContainer);

export default RuleCreateContainer;