import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ActivationDetails from './ActivationDetails.jsx';
import Loader from '../../../shared/loader/Loader.jsx';
import combinedActions from '../../../../redux/actions/index';
import * as activationReducers from '../../../../redux/reducers/activation-reducers';
import * as reducers from '../../../../redux/reducers/index';
import * as _ from 'lodash';

export class ActivationDetailsContainer extends Component {
    componentDidMount() {
        const { fetchActivation, activationId } = this.props;
        fetchActivation(activationId);
    }

    render() {
        const { activation, activationId, history } = this.props;

        if (!_.isUndefined(activation) && activation.response) {
            return (
                <ActivationDetails title={activationId} activation={activation} history={history} />
            )
        }

        return (
            <Loader title={activationId} />
        )
    }
}

export const mapStateToProps = (state, { match, history }) => ({
    activationId: match.params.id,
    activation: activationReducers.getActivation(state, match.params.id),
    isFetching: reducers.getIsFetching(state)
});

ActivationDetailsContainer = connect(
    mapStateToProps,
    combinedActions
)(ActivationDetailsContainer);

export default withRouter(ActivationDetailsContainer);
