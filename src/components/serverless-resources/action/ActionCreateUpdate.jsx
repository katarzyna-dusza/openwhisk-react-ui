import React from 'react';
import InputField from '../../shared/resource-create-update/components/InputField.jsx';
import CodeEditor from '../../shared/resource-create-update/components/CodeEditor.jsx';
import ResourceCreateUpdate from '../../shared/resource-create-update/ResourceCreateUpdate.jsx';
import * as _ from 'lodash';

const ACTION_TYPE = 'nodejs:6';
const MODE = 'javascript';

export default class ActionCreateUpdate extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState();
        this.handleChange = this.handleChange.bind(this);
    }

    initialState() {
        if (_.isUndefined(this.props.action)) {
            return {
                name: '',
                type: ACTION_TYPE,
                code: '',
                changed: false
            };
        }

        return {
            name: this.props.action.name,
            type: ACTION_TYPE,
            code: this.props.action.exec.code,
            changed: false
        };
    }

    setStateForUpdate(newData, newState) {
        const code = this.props.action.exec.code;

        this.setState(newState);

        if (newData !== code) {
            return this.setState({changed: true});
        }

        return this.setState({changed: false});
    }

    setStateForCreate(newData, newState) {
        this.setState(newState);

        if ('' !== newData) {
            return this.setState({changed: true});
        }

        return this.setState({changed: false});
    }

    handleChange(data) {
        const stateKey = data.name;
        const newStateValue = data.value;
        const newState = {};

        newState[stateKey] = newStateValue;

        if (this.props.isCreateView) {
            return this.setStateForCreate(data.value, newState);
        }

        return this.setStateForUpdate(data.value, newState);
    }

    isDisabled(fieldName) {
        return _.includes(this.props.disabledInputs, fieldName);
    }

    setSaveButtonData() {
        return {
            name: this.state.name,
            type: this.state.type,
            code: this.state.code
        };
    }

    render() {
        const content = (
            <div>
                <div className='info'>
                    Enter action name.
                </div>
                <div className='create-part col-12 row'>
                    <InputField labelName='Name'
                                name='name'
                                value={this.state.name}
                                placeholder='Specify an action name'
                                sendData={this.handleChange}
                                disabled={this.isDisabled('name')}
                                required
                    />
                    <InputField labelName='Type'
                                name='type'
                                value={this.state.type}
                                sendData={this.handleChange}
                                disabled
                                required
                    />
                </div>
                <div className='info'>
                    Go ahead and write your code in JavaScript!
                </div>
                <div className='create-part create-part--ace-editor'>
                    <CodeEditor mode={MODE}
                                name='code'
                                value={this.state.code}
                                sendData={this.handleChange}
                                required
                    />
                </div>
            </div>
        );

        return (
            <ResourceCreateUpdate title={this.props.title}
                                  content={content}
                                  data={this.setSaveButtonData()}
                                  changed={this.state.changed}
                                  required={['name', 'type', 'code']}
                                  onClickSave={this.props.save}
                                  history={this.props.history}
                                  linkTo='/action-list'
            />
        )
    }
}