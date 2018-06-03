import React from 'react';
import { withRouter } from 'react-router-dom';
import NavElement from './components/NavElement.jsx';

const navElements = {
    homeLinks: [
        { name: 'Home', link: '/', icon: 'dashboard' }
    ],
    resourceLinks: [
        { name: 'Actions', link: '/action-list', icon: 'code' },
        { name: 'Triggers', link: '/trigger-list', icon: 'launch' },
        { name: 'Rules', link: '/rule-list', icon: 'hearing' },
        { name: 'Activations', link: '/activation-list', icon: 'notifications_active' }
    ]
};

const Navigation = ({ history }) => (
    <div className='top-nav'>
        <NavElement name='Cockpit' icon='dashboard' links={navElements.homeLinks} />
        <NavElement name='Resources'
                    icon='code'
                    current={history.location.pathname}
                    links={navElements.resourceLinks}/>
    </div>
);

export default withRouter(Navigation);