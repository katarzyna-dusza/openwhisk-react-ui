import React, { Component } from 'react';
import { connect } from 'react-redux';
import TriggerList from './TriggerList.jsx';
import Loader from '../../../shared/loader/Loader.jsx'
import combinedActions from '../../../../redux/actions/index';
import * as triggerReducers from '../../../../redux/reducers/trigger-reducers';
import * as reducers from '../../../../redux/reducers/index';

export class TriggerListContainer extends Component {
    componentWillMount() {
        const { fetchTriggers } = this.props;
        fetchTriggers();
    }

    render() {
        const { triggers, isFetching, fireTrigger, deleteTrigger, history } = this.props;
        const title = 'Triggers';

        if (!isFetching) {
            return (
                <TriggerList title={title} triggers={triggers} run={fireTrigger} deleteResource={deleteTrigger} history={history} />
            )
        }

        return (
            <Loader title={title} />
        )
    }
}

export const mapStateToProps = (state, {match}) => ({
    triggers: triggerReducers.getTriggers(state),
    isFetching: reducers.getIsFetching(state)
});

TriggerListContainer = connect(
    mapStateToProps,
    combinedActions
)(TriggerListContainer);

export default TriggerListContainer;
