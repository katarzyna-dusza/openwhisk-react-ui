import React from 'react';
import { Link } from 'react-router-dom';
import ResourceList from '../../../shared/resource-list/ResourceList.jsx';
import * as _ from 'lodash';

const RuleList = ({ rules, deleteResource, title, history })  => {
    const getRuleEntries = rules.map((r, index) => (
        <div key={index} className='entry-list row col-12'>
            <div className='col-2'>
                <Link to={`rule-details/${r.name}`}>{r.name}</Link>
            </div>
            <div className='col-1'>{r.publish ? 'yes' : 'no'}</div>
            <div className='col-1'>{r.version}</div>
            <div className='col-3'>{r.namespace}</div>
            <div className='col-2'>{r.action.name}</div>
            <div className='col-2'>{r.trigger.name}</div>
            <div className='col-1'>
                <i className='material-icons col-1' onClick={() => deleteResource(r.name)}>delete</i>
            </div>
        </div>
    ));

    const resourceData = {
        resourceName: 'Rule',
        info: 'Here is the list of all available rules. See the connected actions with triggers.',
        headerColumns: [
            {col: 'col-2', name: 'Name'},
            {col: 'col-1', name: 'Published'},
            {col: 'col-1', name: 'Version'},
            {col: 'col-3', name: 'Namespace'},
            {col: 'col-2', name: 'Action'},
            {col: 'col-2', name: 'Trigger'},
            {col: 'col-1', name: ''}
        ],
        ruleList: _.isUndefined(rules) ? [] : getRuleEntries
    };

    return (
        <div>
            <ResourceList
                title={title}
                resource={resourceData.resourceName}
                info={resourceData.info}
                data={{headerColumns: resourceData.headerColumns, entryColumns: resourceData.ruleList}}
                history={history}
                linkTo='/rule-create'
            />
        </div>
    )
};

export default RuleList;