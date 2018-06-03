import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Tiles from '../tiles/Tiles.jsx';
import ActionCreateContainer from '../serverless-resources/action/create/ActionCreateContainer.jsx';
import ActionDetailsContainer from '../serverless-resources/action/details/ActionDetailsContainer.jsx';
import ActionListContainer from '../serverless-resources/action/list/ActionListContainer.jsx';
import ActivationDetailsContainer from '../serverless-resources/activation/details/ActivationDetailsContainer.jsx';
import ActivationListContainer from '../serverless-resources/activation/list/ActivationListContainer.jsx';
import TriggerCreateContainer from '../serverless-resources/trigger/create/TriggerCreateContainer.jsx';
import TriggerDetailsContainer from '../serverless-resources/trigger/details/TriggerDetailsContainer.jsx';
import TriggerListContainer from '../serverless-resources/trigger/list/TriggerListContainer.jsx';
import RuleCreateContainer from '../serverless-resources/rule/create/RuleCreateContainer.jsx';
import RuleDetailsContainer from '../serverless-resources/rule/details/RuleDetailsContainer.jsx';
import RuleListContainer from '../serverless-resources/rule/list/RuleListContainer.jsx';

const Content = () => (
    <Switch>
        <Route exact path='/' component={Tiles} />
        <Route path='/action-create' component={ActionCreateContainer} />
        <Route path='/action-details/:name' component={ActionDetailsContainer} />
        <Route path='/action-list' component={ActionListContainer} />
        <Route path='/trigger-create' component={TriggerCreateContainer} />
        <Route path='/trigger-details/:name' component={TriggerDetailsContainer} />
        <Route path='/trigger-list' component={TriggerListContainer} />
        <Route path='/rule-create' component={RuleCreateContainer} />
        <Route path='/rule-details/:name' component={RuleDetailsContainer} />
        <Route path='/rule-list' component={RuleListContainer} />
        <Route path='/activation-details/:id' component={ActivationDetailsContainer} />
        <Route path='/activation-list' component={ActivationListContainer} />
        <Route component={Tiles} />
    </Switch>
);

export default Content
