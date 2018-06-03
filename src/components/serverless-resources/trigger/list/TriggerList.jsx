import React from 'react';
import { Link } from 'react-router-dom';
import ResourceList from '../../../shared/resource-list/ResourceList.jsx';
import * as _ from 'lodash';

const TriggerList = ({ triggers, run, deleteResource, title, history }) => {
    const hasFeed = (annotations) => !!_.find(annotations, ['key', 'feed']);

    const getTriggerEntries = triggers.map((t, index) => (
        <div key={index} className='entry-list row col-12'>
            <div className='col-4'>
                <Link to={`trigger-details/${t.name}`}>{t.name}</Link>
            </div>
            <div className='col-1'>{t.publish ? 'yes' : 'no'}</div>
            <div className='col-1'>{t.version}</div>
            <div className='col-4'>{t.namespace}</div>
            <div className='col-2'>
                {!hasFeed(t.annotations) ? <i className='material-icons col-1' onClick={() => run(t.name)}>whatshot</i> : ''}
                <i className='material-icons col-1' onClick={() => deleteResource(t.name)}>delete</i>
            </div>
        </div>
    ));

    const resourceData = {
        resourceName: 'Trigger',
        info: 'Here is the list of all available triggers. See the default parameters and selected packages.',
        headerColumns: [
            {col: 'col-4', name: 'Name'},
            {col: 'col-1', name: 'Published'},
            {col: 'col-1', name: 'Version'},
            {col: 'col-4', name: 'Namespace'},
            {col: 'col-2', name: ''}
        ],
        triggersList: _.isUndefined(triggers) ? [] : getTriggerEntries

    };

    return (
        <div>
            <ResourceList
                title={title}
                resource={resourceData.resourceName}
                info={resourceData.info}
                data={{headerColumns: resourceData.headerColumns, entryColumns: resourceData.triggersList}}
                history={history}
                linkTo='/trigger-create'
            />
        </div>
    )
};

export default TriggerList;