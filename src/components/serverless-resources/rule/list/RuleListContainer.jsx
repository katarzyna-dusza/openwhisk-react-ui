import React, { Component } from 'react';
import { connect } from 'react-redux';
import RuleList from './RuleList.jsx';
import Loader from '../../../shared/loader/Loader.jsx'
import combinedActions from '../../../../redux/actions/index';
import * as ruleReducers from '../../../../redux/reducers/rule-reducers';
import * as reducers from '../../../../redux/reducers/index';

export class RuleListContainer extends Component {
    componentWillMount() {
        const { fetchRules } = this.props;
        fetchRules();
    }

    render() {
        const { rules, isFetching, deleteRule, history } = this.props;
        const title = 'Rules';

        if (!isFetching) {
            return (
                <RuleList title={title} rules={rules} deleteResource={deleteRule} history={history} />
            )
        }

        return (
            <Loader title={title} />
        )
    }
}

export const mapStateToProps = (state, {}) => ({
    rules: ruleReducers.getRules(state),
    isFetching: reducers.getIsFetching(state)
});

RuleListContainer = connect(
    mapStateToProps,
    combinedActions
)(RuleListContainer);

export default RuleListContainer;
