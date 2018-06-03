import React from 'react';
import { Link } from 'react-router-dom';

const EmptyPage = ({ title, resource }) => {
    const info = `Sorry, it looks like you have an empty list of ${resource}s.`;
    const create = `+ Create New ${resource}`;

    return (
        <div className='resource resource--with-nav col-12'>
            <div className='resource__title'>{title}</div>
            <div className='empty-page'>
                <div className='image'>
                    <img src='src/images/empty-box.svg' alt='empty'></img>
                </div>
                <div className='info'>{info}</div>
                <div className='create-resource'>
                    <Link to='/action-create'>{create}</Link>
                </div>
            </div>
        </div>
    )
};

export default EmptyPage;