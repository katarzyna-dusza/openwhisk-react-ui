import React from 'react';

const Loader = ({ title }) => (
    <div className='resource resource--with-nav col-12'>
        <div className='resource__title'>{title}</div>
        <div className='resource__content'>
            <div className='loader'>
                <div className='square square--first'></div>
                <div className='square square--second'></div>
                <div className='square square--third'></div>
            </div>
        </div>
    </div>
);

export default Loader;