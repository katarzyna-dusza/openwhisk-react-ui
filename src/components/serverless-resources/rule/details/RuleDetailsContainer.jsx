import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RuleCreateUpdate from '../RuleCreateUpdate.jsx';
import Loader from '../../../shared/loader/Loader.jsx';
import combinedActions from '../../../../redux/actions/index';
import * as ruleReducers from '../../../../redux/reducers/rule-reducers';
import * as triggerReducers from '../../../../redux/reducers/trigger-reducers';
import * as actionReducers from '../../../../redux/reducers/action-reducers';
import * as reducers from '../../../../redux/reducers/index';
import * as _ from 'lodash';

export class RuleDetailsContainer extends Component {
    componentDidMount() {
        const { fetchTriggers, fetchActions, fetchRule, ruleName  } = this.props;
        fetchTriggers();
        fetchActions();
        fetchRule(ruleName);
    }

    componentDidUpdate() {
        const { isRequestSuccessful, history } = this.props;

        if ('RULE_UPDATED' === isRequestSuccessful) {
            history.push('/rule-list');
        }
    }

    render() {
        const { rule, actions, triggers, updateRule, ruleName, history } = this.props;
        const disabledInputs = ['name'];

        if (!_.isUndefined(rule)) {
            return (
                <RuleCreateUpdate
                    title={ruleName}
                    rule={rule}
                    actions={actions}
                    triggers={triggers}
                    save={updateRule}
                    isCreateView={false}
                    disabledInputs={disabledInputs}
                    history={history}
                />
            )
        }

        return (
            <Loader title={ruleName} />
        )
    }
}

export const mapStateToProps = (state, { match, history }) => ({
    ruleName: match.params.name,
    rule: ruleReducers.getRule(state, match.params.name),
    actions: actionReducers.getActions(state),
    triggers: triggerReducers.getTriggers(state),
    isRequestSuccessful: reducers.getIsRequestSuccessful(state)
});

RuleDetailsContainer = connect(
    mapStateToProps,
    combinedActions
)(RuleDetailsContainer);

export default withRouter(RuleDetailsContainer);
