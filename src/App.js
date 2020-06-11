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
import ManagePets from "./pages/ManagePets"
import ManageMeds from "./pages/ManageMeds"



class App extends Component{

    render(){

        return <Router>
            <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/health" component={Health} />
            <Route exact path="/care" component={Care} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/create-an-invite" component={Invitation} />
            <Route exact path="/invite-success" component={InvitationModal} />
            <Route exact path="/add/pets" component={AddPets} />
            <Route exact path="/manage/pets" component={ManagePets} />
            <Route exact path="/manage/meds" component={ManageMeds} />
            </Switch>
        </Router>

    };



}

export default App;

