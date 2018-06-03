import React from 'react';
import { Link } from 'react-router-dom';
import ResourceList from '../../../shared/resource-list/ResourceList.jsx';
import * as _ from 'lodash';

const ActionList = ({ actions, deleteResource, title, history }) => {
    const getActionEntries = actions.map((a, index) => (
        <div key={index} className='entry-list row col-12'>
            <div className='col-3'>
                <Link to={`action-details/${a.name}`}>{a.name}</Link>
            </div>
            <div className='col-2'>{a.annotations[0].value}</div>
            <div className='col-1'>{a.publish ? 'yes' : 'no'}</div>
            <div className='col-1'>{a.version}</div>
            <div className='col-4'>{a.namespace}</div>
            <div onClick={() => deleteResource(a.name)}>
                <i className='material-icons col-1'>delete</i>
            </div>
        </div>
    ));

    const resourceData = {
        resourceName: 'Action',
        info: 'Here is the list of all available actions. See the function code.',
        headerColumns: [
            {col: 'col-3', name: 'Name'},
            {col: 'col-2', name: 'Type'},
            {col: 'col-1', name: 'Published'},
            {col: 'col-1', name: 'Version'},
            {col: 'col-4', name: 'Namespace'},
            {col: 'col-1', name: ''}
        ],
        actionList: _.isUndefined(actions) ? [] : getActionEntries
    };

    return (
        <div>
            <ResourceList
                title={title}
                resource={resourceData.resourceName}
                info={resourceData.info}
                data={{headerColumns: resourceData.headerColumns, entryColumns: resourceData.actionList}}
                history={history}
                linkTo='/action-create'
            />
        </div>
    )
};

export default ActionList;