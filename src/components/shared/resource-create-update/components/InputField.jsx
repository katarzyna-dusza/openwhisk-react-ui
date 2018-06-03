import React from 'react';

export default class InputField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value ? this.props.value : ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const data = {
            name: this.props.name,
            value: event.target.value
        };

        this.setState({value: event.target.value});
        this.props.sendData(data);
    }

    render() {
        return (
            <div className='input-field col-6'>
                <label className='col-12 row' required={this.props.required}>{this.props.labelName}</label>
                <input className='col-12'
                       type='text'
                       placeholder={this.props.placeholder}
                       name={this.props.name}
                       value={this.state.value}
                       onChange={this.handleChange}
                       disabled={this.props.disabled}/>
            </div>
        );
    }
}