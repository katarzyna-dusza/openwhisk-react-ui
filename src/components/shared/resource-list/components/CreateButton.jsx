import React from 'react';

const CreateButton = ({ history, link }) => {
  if (history && link) {
    return (
        <div className='create-btn' onClick={() => history.push(link)}>CREATE</div>
    );
  }

  return null;
};

export default CreateButton;