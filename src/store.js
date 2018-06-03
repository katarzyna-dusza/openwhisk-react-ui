import { createStore, applyMiddleware } from 'redux';
import resourceReducers from './redux/reducers/index';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import * as _ from 'lodash';

export const startRequestDispatcher = (store) => (next) => (action) => {
    if ( _.isFunction(action)) {
        next({
            type: 'START_REQUEST'
        });

        return next(action);
    }

    return next(action);
};

export const configureStore = () => {
    const middlewares = [startRequestDispatcher, thunk, promise, createLogger()];

    return createStore(
        resourceReducers,
        applyMiddleware(...middlewares),
    );
};