import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { Link, Route, IndexRoute, History, browserHistory, hashHistory  } from 'react-router';

import routes from './app';

import styles from './scss/main.scss';


ReactDOM.render(
    <Router history={ hashHistory }>
        { routes }
    </Router>
    , document.getElementById('content')
);

