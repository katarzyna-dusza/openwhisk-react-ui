import React from 'react';

export default class DropdownField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            value: this.props.value ? this.props.value : '',
        };
    }

    toggleResource() {
        this.setState({show: !this.state.show});
    }

    selectedElement(selected) {
        const data = {
            name: this.props.name,
            value: selected
        };

        this.setState({value: selected});
        this.setState({show: !this.state.show});
        this.props.sendData(data);
    }


    render() {
        const dropdownElements = this.props.dropdownElements.map((d, index) => {
            return (
                <div key={index} className='dropdown-item' onClick={() => {this.selectedElement(d.name)}}>{d.name}</div>
            );
        });

        return (
            <div className='dropdown-field col-6'>
                <label className='col-12 row' required={this.props.required}>{this.props.labelName}</label>
                <div className='dropdown-element col-12'>
                    <button className='dropdown-element__btn dropdown-toggle' onClick={() => {this.toggleResource()}}></button>
                    <input className='dropdown-element__selected col-12' disabled
                           type='text'
                           placeholder={this.props.placeholder}
                           value={this.state.value}>
                    </input>
                    <div className={this.state.show ? 'dropdown-menu dropdown-menu--show' : 'dropdown-menu'}>
                        {dropdownElements}
                    </div>
                </div>
            </div>
        );
    }
}