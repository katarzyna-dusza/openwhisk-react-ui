import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActivationList from './ActivationList.jsx';
import Loader from '../../../shared/loader/Loader.jsx'
import combinedActions from '../../../../redux/actions/index';
import * as activationReducers from '../../../../redux/reducers/activation-reducers';
import * as reducers from '../../../../redux/reducers/index';

export class ActivationListContainer extends Component {
    componentWillMount() {
        const { fetchActivations } = this.props;
        fetchActivations();
    }

    render() {
        const { activations, isFetching, history } = this.props;
        const title = 'Activations';

        if (!isFetching) {
            return (
                <ActivationList title={title} activations={activations} history={history} />
            )
        }

        return (
            <Loader title={title} />
        )
    }
}

export const mapStateToProps = (state, {}) => ({
    activations: activationReducers.getActivations(state),
    isFetching: reducers.getIsFetching(state)
});

ActivationListContainer = connect(
    mapStateToProps,
    combinedActions
)(ActivationListContainer);

export default ActivationListContainer;
