import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ActionCreateUpdate from '../ActionCreateUpdate.jsx';
import Loader from '../../../shared/loader/Loader.jsx';
import combinedActions from '../../../../redux/actions/index';
import * as actionReducers from '../../../../redux/reducers/action-reducers';
import * as reducers from '../../../../redux/reducers/index';
import * as _ from 'lodash';

export class ActionDetailsContainer extends Component {
    componentDidMount() {
        const { fetchAction, actionName } = this.props;
        fetchAction(actionName);
    }

    componentDidUpdate() {
        const { isRequestSuccessful, history } = this.props;

        if ('ACTION_UPDATED' === isRequestSuccessful) {
            history.push('/action-list');
        }
    }

    render() {
        const { action, updateAction, actionName, history } = this.props;
        const disabledInputs = ['name'];

        if (!_.isUndefined(action) && action.exec.code) {
            return (
                <ActionCreateUpdate title={actionName}
                                    action={action}
                                    save={updateAction}
                                    isCreateView={false}
                                    disabledInputs={disabledInputs}
                                    history={history}
                />
            )
        }

        return (
            <Loader title={actionName} />
        )
    }
}

export const mapStateToProps = (state, { match, history }) => ({
    actionName: match.params.name,
    action: actionReducers.getAction(state, match.params.name),
    isRequestSuccessful: reducers.getIsRequestSuccessful(state)
});

ActionDetailsContainer = connect(
    mapStateToProps,
    combinedActions
)(ActionDetailsContainer);

export default withRouter(ActionDetailsContainer);
