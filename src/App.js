import React from "react";
import {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,    
}from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Health from "./pages/Health"
import Care from "./pages/Care"
import Settings from "./pages/Settings"
import Invitation from "./pages/Invitation"



class App extends Component{

    render(){

        return <Router>
            <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/health" component={Health} />
            <Route exact path="/care" component={Care} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/invitation" component={Invitation} />
            </Switch>
        </Router>

    };



}

export default App;

