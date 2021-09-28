import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './home/Index';

export default class MainIndex extends React.Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </HashRouter>
        )
    }
}