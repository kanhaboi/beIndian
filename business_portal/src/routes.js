import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Landing from "./components/home/landing_page.js";
import Login from "./components/authenticate/login.js";
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Landing} />
            </Switch>
        </Router>
    )
}

export default Routes;