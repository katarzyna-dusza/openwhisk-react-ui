import React from 'react';
import { Link } from 'react-router-dom';
import ResourceList from '../../../shared/resource-list/ResourceList.jsx';
import * as _ from 'lodash';

const ActivationList = ({ activations, title }) => {
    const getActivationEntries = activations.map((a, index) => (
        <div key={index} className='entry-list row col-12'>
            <div className='col-4'>
                <Link to={`activation-details/${a.activationId}`}>{`${a.name}-${a.activationId}`}</Link>
            </div>
            <div className='col-1'>{_.isInteger(a.duration) ? a.duration : '-'}</div>
            <div className='col-1'>{a.publish ? 'yes' : 'no'}</div>
            <div className='col-1'>{a.version}</div>
            <div className='col-3'>{a.namespace}</div>
            <div className='col-2'>{_.isInteger(a.statusCode) ? a.statusCode : '-' }</div>
        </div>
    ));

    const resourceData = {
        resourceName: 'Activation',
        info: 'Here is the list of all available activations. See the logs of action or trigger execution.',
        headerColumns: [
            {col: 'col-4', name: 'Name'},
            {col: 'col-1', name: 'Duration'},
            {col: 'col-1', name: 'Published'},
            {col: 'col-1', name: 'Version'},
            {col: 'col-3', name: 'Namespace'},
            {col: 'col-2', name: 'Status Code'}
        ],
        activationList: _.isUndefined(activations) ? [] : getActivationEntries
    };

    return (
        <div>
            <ResourceList
                title={title}
                resource={resourceData.resourceName}
                info={resourceData.info}
                data={{headerColumns: resourceData.headerColumns, entryColumns: resourceData.activationList}}
            />
        </div>
    );
};

export default ActivationList;