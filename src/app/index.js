
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './containers/App';
import { Home } from './containers/Home';
import { Dashboard } from './containers/dashboard/Dashboard';
import { CreatePost} from './containers/dashboard/CreatePost';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="dashboard" component={Dashboard}>
            <IndexRoute component={CreatePost} />
        </Route>
    </Route>
)
