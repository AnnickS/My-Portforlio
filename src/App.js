import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import mainPage from "./mainPage";
import itemsisitems from "./itemsisitems";
import floatingisland from "./floatingisland";
import insurancevalidator from "./insurancevalidator";
import redemptionsguild from "./redemptionsguild";
import toyotaconnected from "./toyotaconnected";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>n
      <React.Fragment>
        <NavBar/>
        <ScrollToTop/>
        <Switch>
        <Route exact path="/" component={mainPage} />
            <Route exact path="/ItemsIsItems" component={itemsisitems} />
            <Route exact path="/FloatingIsland" component={floatingisland} />
            <Route exact path="/InsuranceValidator" component={insurancevalidator} />
            <Route exact path="/VRGameDeveloper" component={redemptionsguild} /> 
            <Route exact path="/PrototypeGameDeveloper" component={toyotaconnected} />
            <Redirect from="*" to="/"/>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
