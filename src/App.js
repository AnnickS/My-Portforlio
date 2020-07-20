import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import mainPage from "./mainPage";
import itemsisitems from "./itemsisitems";
import floatingisland from "./floatingisland";
import insurancevalidator from "./insurancevalidator";
import ScrollToTop from "./ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar/>
        <ScrollToTop/>
        <Switch>
        <Route exact path="/" component={mainPage} />
            <Route exact path="/ItemsIsItems" component={itemsisitems} />
            <Route exact path="/FloatingIsland" component={floatingisland} />
            <Route exact path="/InsuranceValidator" component={insurancevalidator} />
            <Redirect from="*" to="/"/>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
