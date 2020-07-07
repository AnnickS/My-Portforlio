import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import mainPage from "./mainPage";
import itemsisitems from "./itemsisitems";
import floatingisland from "./floatingisland";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={mainPage} />
        <Route exact path="/ItemsIsItems" component={itemsisitems} />
        <Route exact path="/FloatingIsland" component={floatingisland} />
        <Redirect from="*" to="/"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
