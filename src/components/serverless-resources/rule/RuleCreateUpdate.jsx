import React from 'react';
import InputField from '../../shared/resource-create-update/components/InputField.jsx';
import DropdownField from '../../shared/resource-create-update/components/DropdownField.jsx';
import ResourceCreateUpdate from '../../shared/resource-create-update/ResourceCreateUpdate.jsx';
import * as _ from 'lodash';

export default class RuleCreateUpdate extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.initialState();
        this.handleChange = this.handleChange.bind(this);
    }

    initialState() {
        if (_.isUndefined(this.props.rule)) {
            return {
                name: '',
                trigger: '',
                action: '',
                changed: false
            };
        }

        return {
            name: this.props.rule.name,
            trigger: this.props.rule.trigger.name,
            action: this.props.rule.action.name,
            changed: false
        };
    }

    setStateForUpdate(newData, newState) {
        const propsData = [this.initialState().trigger, this.initialState().action];

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
            trigger: this.state.trigger,
            action: this.state.action
        };
    }

    render() {
        const content = (
            <div>
                <div className='info'>
                    Enter rule name and choose required action and trigger.
                </div>
                <div className='create-part col-12 row'>
                    <InputField labelName='Name'
                                name='name'
                                value={this.state.name}
                                placeholder='Specify a rule name'
                                sendData={this.handleChange}
                                disabled={this.isDisabled('name')}
                                required
                    />
                    <DropdownField labelName='Action'
                                   name='action'
                                   value={this.state.action}
                                   placeholder='Select an action'
                                   sendData={this.handleChange}
                                   dropdownElements={this.props.actions}
                                   required
                    />
                    <DropdownField labelName='Trigger'
                                   name='trigger'
                                   value={this.state.trigger}
                                   placeholder='Select a trigger'
                                   sendData={this.handleChange}
                                   dropdownElements={this.props.triggers}
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
                                  required={['name', 'action', 'trigger']}
                                  onClickSave={this.props.save}
                                  history={this.props.history}
                                  linkTo='/rule-list'
            />
        )
    }
}