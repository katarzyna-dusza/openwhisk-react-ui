import React from 'react';
import * as _ from 'lodash';

const SaveButton = ({ data, changed, required, onClickSave }) => {
    const requiredFields = _.pick(data, required);
    const dataValues = _.valuesIn(requiredFields);
    const searchMissingFields = dataValues.map(v => _.isEmpty(v));
    const missingRequiredFields = _.includes(searchMissingFields, true);

    return (
        <div className={(!missingRequiredFields && changed) ? 'save-btn save-btn--show' : 'save-btn'}
             onClick={() => onClickSave(data)}>
            SAVE
        </div>
    );
};

export default SaveButton;