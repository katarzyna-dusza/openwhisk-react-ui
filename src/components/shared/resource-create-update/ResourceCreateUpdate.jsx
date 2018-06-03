import React from 'react';
import SaveButton from './components/SaveButton.jsx';
import BackButton from './components/BackButton.jsx';

const ResourceCreateUpdate = ({ title, content, data, required, changed, onClickSave, history, linkTo }) => (
    <div className='resource resource--with-nav col-12'>
        <div className='resource__title'>
            <BackButton history={history} link={linkTo} />
            {title}
            <SaveButton data={data} changed={changed} required={required} onClickSave={onClickSave} />
        </div>
        <div className='resource__content'>
            {content}
        </div>
    </div>
);

export default ResourceCreateUpdate;