import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TriggerCreateUpdate from '../TriggerCreateUpdate.jsx';
import Loader from '../../../shared/loader/Loader.jsx';
import combinedActions from '../../../../redux/actions/index';
import * as triggerReducers from '../../../../redux/reducers/trigger-reducers';
import * as packageReducers from '../../../../redux/reducers/package-reducers';
import * as reducers from '../../../../redux/reducers/index';
import * as _ from 'lodash';

export class TriggerDetailsContainer extends Component {
    componentDidMount() {
        const { fetchPackages, fetchTrigger, triggerName } = this.props;
        fetchPackages();
        fetchTrigger(triggerName);
    }

    componentDidUpdate() {
        const { isRequestSuccessful, history } = this.props;

        if ('TRIGGER_UPDATED' === isRequestSuccessful) {
            history.push('/trigger-list');
        }
    }

    render() {
        const { trigger, packages, updateTrigger, triggerName, history } = this.props;
        const disabledInputs = ['name'];

        if (!_.isUndefined(trigger) && trigger.parameters) {
            return (
                <TriggerCreateUpdate title={triggerName}
                                     trigger={trigger}
                                     packages={packages}
                                     save={updateTrigger}
                                     isCreateView={false}
                                     disabledInputs={disabledInputs}
                                     history={history}
                />
            )
        }

        return (
            <Loader title={triggerName} />
        )
    }
}

export const mapStateToProps = (state, { match, history }) => ({
    triggerName: match.params.name,
    trigger: triggerReducers.getTrigger(state, match.params.name),
    packages: packageReducers.getPackages(state),
    isRequestSuccessful: reducers.getIsRequestSuccessful(state)
});

TriggerDetailsContainer = connect(
    mapStateToProps,
    combinedActions
)(TriggerDetailsContainer);

export default withRouter(TriggerDetailsContainer);
