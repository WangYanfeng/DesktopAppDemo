import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './mock/mockIndex'
import App from './App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';

import './index.css';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={LoginPage} />
            <Route path="/home" component={HomePage} />
        </Switch>
    </HashRouter>
);

ReactDOM.render(<BasicRoute />, document.getElementById('root'));