import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Store from '../pages/Store'

import CheckOut from '../pages/CheckOut'


const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" Component={Store}></Route>
            </Switch>
        </Router>
    )
}