import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
      </Switch>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
