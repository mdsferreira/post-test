import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import * as serviceWorker from './serviceWorker';
import { Router, Switch, Route } from 'react-router-dom';
import history from './store/history';
import Detail from './post_detail/Detail';

ReactDOM.render(
    <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/posts/" component={App} />
                    <Route path="/posts/:id" component={Detail} />
                </Switch>
            </Router>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister(); 