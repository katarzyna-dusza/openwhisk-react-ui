import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionCreateUpdate from '../ActionCreateUpdate.jsx';
import combinedActions from '../../../../redux/actions/index';
import * as reducers from '../../../../redux/reducers/index';

export class ActionCreateContainer extends Component {
    componentDidUpdate() {
        const { isRequestSuccessful, history } = this.props;

        if ('ACTION_CREATED' === isRequestSuccessful) {
            history.push('/action-list');
        }
    }

    render() {
        const title = 'New Action';
        const { createAction, history } = this.props;
        const disabledInputs = [];

        return (
            <ActionCreateUpdate title={title}
                                save={createAction}
                                isCreateView={true}
                                disabledInputs={disabledInputs}
                                history={history}
            />
        )
    }
}

export const mapStateToProps = (state, { history }) => ({
    isRequestSuccessful: reducers.getIsRequestSuccessful(state)
});

ActionCreateContainer = connect(
    mapStateToProps,
    combinedActions
)(ActionCreateContainer);

export default ActionCreateContainer;
