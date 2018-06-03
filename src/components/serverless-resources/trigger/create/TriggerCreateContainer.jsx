import React, { Component } from 'react';
import { connect } from 'react-redux';
import TriggerCreateUpdate from '../TriggerCreateUpdate.jsx';
import combinedActions from '../../../../redux/actions/index';
import * as packageReducers from '../../../../redux/reducers/package-reducers';
import * as reducers from '../../../../redux/reducers/index';

export class TriggerCreateContainer extends Component {
    componentDidUpdate() {
        const { isRequestSuccessful, history } = this.props;

        if ('TRIGGER_CREATED' === isRequestSuccessful) {
            history.push('/trigger-list');
        }
    }

    componentDidMount() {
        const { fetchPackages } = this.props;
        fetchPackages();
    }

    render() {
        const title = 'New Trigger';
        const { createTrigger, packages, history } = this.props;
        const disabledInputs = [];

        return (
            <TriggerCreateUpdate title={title}
                                 packages={packages}
                                 save={createTrigger}
                                 isCreateView={false}
                                 disabledInputs={disabledInputs}
                                 history={history} />
        )
    }
}

export const mapStateToProps = (state, { history }) => ({
    packages: packageReducers.getPackages(state),
    isRequestSuccessful: reducers.getIsRequestSuccessful(state)
});

TriggerCreateContainer = connect(
    mapStateToProps,
    combinedActions
)(TriggerCreateContainer);

export default TriggerCreateContainer;