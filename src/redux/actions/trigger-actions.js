import axios from 'axios';
import { config } from '../../config';
import * as _ from 'lodash';

export const trigger_created = (trigger) => ({
    type: 'TRIGGER_CREATED',
    trigger
});

export const trigger_fetched = (trigger) => ({
    type: 'TRIGGER_FETCHED',
    trigger
});

export const triggers_fetched = (triggers) => ({
    type: 'TRIGGERS_FETCHED',
    triggers
});

export const trigger_updated = (trigger) => ({
    type: 'TRIGGER_UPDATED',
    trigger
});

const trigger_deleted = (triggerName) => ({
    type: 'TRIGGER_DELETED',
    triggerName
});

const trigger_fired = (triggerName) => ({
    type: 'TRIGGER_FIRED',
    triggerName
});

export const prepareTrigger = (trigger) => ({
    parameters: _.isEmpty(trigger.parameters) ? [] : JSON.parse(trigger.parameters),
    annotations: trigger.package
});

export const createTrigger = (trigger) => (dispatch) => (
    axios.put(`${config.baseUrl}/triggers/${trigger.name}`, prepareTrigger(trigger))
        .then(triggerResponse => dispatch(trigger_created(triggerResponse)))
        .catch(console.log)
);

export const fetchTriggers = () => (dispatch) => (
    axios.get(`${config.baseUrl}/triggers`)
        .then(triggerResponse => dispatch(triggers_fetched(triggerResponse)))
        .catch(console.log)
);

export const fetchTrigger = (name) => (dispatch) => (
    axios.get(`${config.baseUrl}/triggers/${name}`)
        .then(triggerResponse => dispatch(trigger_fetched(triggerResponse)))
        .catch(console.log)
);

export const updateTrigger = (trigger) => (dispatch) => (
    axios.put(`${config.baseUrl}/triggers/${trigger.name}?overwrite=true`, prepareTrigger(trigger))
        .then(triggerResponse => dispatch(trigger_updated(triggerResponse)))
        .catch(console.log)
);

export const deleteTrigger = (name) => (dispatch) => (
    axios.delete(`${config.baseUrl}/triggers/${name}`)
        .then(triggerResponse => dispatch(trigger_deleted(name)))
        .catch(console.log)
);

export const fireTrigger = (name) => (dispatch) => (
    axios.post(`${config.baseUrl}/triggers/${name}`, {})
        .then(triggerResponse => dispatch(trigger_fired(name)))
        .catch(console.log)
);