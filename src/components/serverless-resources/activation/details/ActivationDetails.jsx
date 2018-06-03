import React from 'react';
import InputField from '../../../shared/resource-create-update/components/InputField.jsx';
import CodeEditor from '../../../shared/resource-create-update/components/CodeEditor.jsx';
import ResourceCreateUpdate from '../../../shared/resource-create-update/ResourceCreateUpdate.jsx';

const MODE = 'json';

const ActivationDetails = ({ activation, title, history }) => {
    const prepareActivationOutput = () => {
        const output = {
            response: activation.response,
            logs: activation.logs
        };

        return JSON.stringify(output, null, 2);
    };

    const content = (
        <div>
            <div className='info'>
                Activation details.
            </div>
            <div className='create-part col-12 row'>
                <InputField labelName='Trigger Name'
                            name='name'
                            value={activation.name}
                            disabled
                />
                <InputField labelName='Id'
                            name='activationId'
                            value={activation.activationId}
                            disabled
                />
            </div>
            <div className='info'>
                Output.
            </div>
            <div className='create-part create-part--ace-editor'>
                <CodeEditor mode={MODE}
                            value={prepareActivationOutput()}
                />
            </div>
        </div>
    );

    return (
        <ResourceCreateUpdate title={title}
                              content={content}
                              history={history}
                              linkTo='/activation-list'
        />
    )
};

export default ActivationDetails;