import React from 'react';
import InputField from '../../shared/resource-create-update/components/InputField.jsx';
import CodeEditor from '../../shared/resource-create-update/components/CodeEditor.jsx';
import DropdownField from '../../shared/resource-create-update/components/DropdownField.jsx';
import ResourceCreateUpdate from '../../shared/resource-create-update/ResourceCreateUpdate.jsx';
import * as _ from 'lodash';

const MODE = 'json';

export default class TriggerCreateUpdate extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState();
        this.handleChange = this.handleChange.bind(this);
    }

    initialState() {
        if (_.isUndefined(this.props.trigger)) {
            return {
                name: '',
                parameters: '',
                package: '',
                changed: false
            };
        }

        return {
            name: this.props.trigger.name,
            parameters: JSON.stringify(this.props.trigger.parameters, null, 2),
            package: !_.isEmpty(this.props.trigger.annotations) ? _.split(this.props.trigger.annotations[0].value, '/')[0] : '',
            changed: false
        };
    }

    setStateForUpdate(newData, newState) {
        const propsData = [this.initialState().parameters, this.initialState().package];

        this.setState(newState);

        if (!_.includes(propsData, newData)) {
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
            parameters: this.state.parameters ? this.state.parameters : [],
            package: this.state.package ? [{'key': 'feed', 'value': `${this.state.package}/webhook`}] : []
        };
    }

    render() {
        const content = (
            <div>
                <div className='info'>
                    Enter trigger name and optionally choose a package.
                </div>
                <div className='create-part col-12 row'>
                    <InputField labelName='Name'
                                name='name'
                                value={this.state.name}
                                placeholder='Specify a trigger name'
                                sendData={this.handleChange}
                                disabled={this.isDisabled('name')}
                                required
                    />
                    <DropdownField labelName='Package'
                                   name='package'
                                   value={this.state.package}
                                   placeholder='Select package'
                                   sendData={this.handleChange}
                                   dropdownElements={this.props.packages}
                    />
                </div>
                <div className='info'>
                    Enter the optional default parameters in JSON syntax.
                </div>
                <div className='create-part create-part--ace-editor'>
                    <CodeEditor mode={MODE}
                                name='parameters'
                                value={this.state.parameters}
                                sendData={this.handleChange}
                    />
                </div>
            </div>
        );

        return (
            <ResourceCreateUpdate title={this.props.title}
                                  content={content}
                                  data={this.setSaveButtonData()}
                                  changed={this.state.changed}
                                  required={['name']}
                                  onClickSave={this.props.save}
                                  history={this.props.history}
                                  linkTo='/trigger-list'
            />
        )
    }
}