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
import InvitationModal from "./components/Modals/InvitationModal"
import AddPets from "./pages/AddPets"



class App extends Component{

    render(){

        return <Router>
            <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/health" component={Health} />
            <Route exact path="/care" component={Care} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/invitation" component={Invitation} />
            <Route exact path="/invitation-successful" component={InvitationModal} />
            <Route exact path="/add/pets" component={AddPets} />
            </Switch>
        </Router>

    };



}

export default App;

