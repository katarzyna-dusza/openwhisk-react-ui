import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { App } from './components/App.jsx';
import { configureStore } from './store';

import './styles/styles.scss';

ReactDOM.render((
    <Provider store={configureStore()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));