import axios from 'axios';
import { config } from '../../config';

const action_created = (action) => ({
    type: 'ACTION_CREATED',
    action
});

const action_fetched = (action) => ({
    type: 'ACTION_FETCHED',
    action
});

const actions_fetched = (actions) => ({
    type: 'ACTIONS_FETCHED',
    actions
});

const action_updated = (action) => ({
    type: 'ACTION_UPDATED',
    action
});

const action_deleted = (actionName) => ({
    type: 'ACTION_DELETED',
    actionName
});

export const prepareAction = (action) => ({
    exec: {
        kind: action.type,
        code: action.code
    }
});

export const createAction = (action) => (dispatch) => (
    axios.put(`${config.baseUrl}/actions/${action.name}`, prepareAction(action))
        .then(actionResponse => dispatch(action_created(actionResponse)))
        .catch(console.log)
);

export const fetchActions = () => (dispatch) => (
    axios.get(`${config.baseUrl}/actions`)
        .then(actionResponse => dispatch(actions_fetched(actionResponse)))
        .catch(console.log)
);

export const fetchAction = (name) => (dispatch) => (
    axios.get(`${config.baseUrl}/actions/${name}`)
        .then(actionResponse => dispatch(action_fetched(actionResponse)))
        .catch(console.log)
);

export const updateAction = (action) => (dispatch) => (
    axios.put(`${config.baseUrl}/actions/${action.name}?overwrite=true`, prepareAction(action))
        .then(actionResponse => dispatch(action_updated(actionResponse)))
        .catch(console.log)
);

export const deleteAction = (name) => (dispatch) => (
    axios.delete(`${config.baseUrl}/actions/${name}`)
        .then(actionResponse => dispatch(action_deleted(name)))
        .catch(console.log)
);