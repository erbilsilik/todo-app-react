import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import store from './store';
import {Provider} from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, combineReducers, createStore} from "redux";
import todoListApp from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools, devToolsEnhancer} from 'redux-devtools-extension';

const reducers = combineReducers({
    todoListApp,
});

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
