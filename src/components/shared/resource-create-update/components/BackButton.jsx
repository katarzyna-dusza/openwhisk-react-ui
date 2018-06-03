import React from 'react';

const BackButton = ({ history, link }) => {
    return (
        <div className='back-btn' onClick={() => history.push(link)}>BACK</div>
    );
};

export default BackButton;