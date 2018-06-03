import React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/mode/json';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/ext/statusbar';

export default class CodeEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value ? this.props.value : '',
        };

        this.handleCodeChange = this.handleCodeChange.bind(this);
    }

    handleCodeChange(code) {
        const data = {
            name: this.props.name,
            value: code
        };

        this.setState({value: code});
        this.props.sendData(data);
    }

    render() {
        return (
            <AceEditor
                className='col-12'
                mode={this.props.mode}
                theme='github'
                name={this.props.name}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                wrapEnabled={true}
                value={this.state.value}
                enableLiveAutocompletion={true}
                onChange={this.handleCodeChange}
            />
        );
    }
}