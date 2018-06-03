import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionList from './ActionList.jsx';
import Loader from '../../../shared/loader/Loader.jsx';
import combinedActions from '../../../../redux/actions/index';
import * as actionReducers from '../../../../redux/reducers/action-reducers';
import * as reducers from '../../../../redux/reducers/index';

export class ActionListContainer extends Component {
    componentWillMount() {
        const { fetchActions } = this.props;
        fetchActions();
    }

    render() {
        const { actions, deleteAction, isFetching, history } = this.props;
        const title = 'Actions';

        if (!isFetching) {
            return (
                <ActionList title={title} actions={actions} deleteResource={deleteAction} history={history} />
            )
        }

        return (
            <Loader title={title} />
        )
    }
}

export const mapStateToProps = (state, {}) => ({
    actions: actionReducers.getActions(state),
    isFetching: reducers.getIsFetching(state)
});

ActionListContainer = connect(
    mapStateToProps,
    combinedActions
)(ActionListContainer);

export default ActionListContainer;
