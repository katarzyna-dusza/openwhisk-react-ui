import axios from 'axios';
import { config } from '../../config';
import * as fromActionActions from './action-actions';
import * as fromActivationActions from './activation-actions';
import * as fromTriggerActions from './trigger-actions';
import * as fromPackageActions from './package-actions';
import * as fromRuleActions from './rule-actions';
import * as _ from 'lodash';

axios.interceptors.request.use(
    req => _.merge({}, req, {headers: {Authorization: config.token}}),
    err => console.log(err)
);

axios.interceptors.response.use(
    req => req.data,
    err => console.log(err)
);

const combinedActions = {
    ...fromActionActions,
    ...fromActivationActions,
    ...fromTriggerActions,
    ...fromPackageActions,
    ...fromRuleActions
};

export default combinedActions;