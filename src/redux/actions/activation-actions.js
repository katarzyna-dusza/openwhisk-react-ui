import axios from 'axios';
import { config } from '../../config';

const activation_fetched = (activation) => ({
    type: 'ACTIVATION_FETCHED',
    activation
});

const activations_fetched = (activations) => ({
    type: 'ACTIVATIONS_FETCHED',
    activations
});

export const fetchActivations = () => (dispatch) => (
    axios.get(`${config.baseUrl}/activations`)
        .then(activationResponse => dispatch(activations_fetched(activationResponse)))
        .catch(console.log)
);

export const fetchActivation = (id) => (dispatch) => (
    axios.get(`${config.baseUrl}/activations/${id}`)
        .then(activationResponse => dispatch(activation_fetched(activationResponse)))
        .catch(console.log)
);