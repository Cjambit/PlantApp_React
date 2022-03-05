import React, { useState, useRef, useEffect } from "react";
import {Route, Switch} from "react-router-dom";
import "./App.css";
import Documentation from './components/Documentation';
import ContractorHome from './components/ContractorView/Home';
import ClientHome from './components/ClientView/ClientHome';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {StockProvider} from "./StockContext";

function App(props) {

  return (
    <StockProvider>
    <div>
      <Navbar/>
        <Switch>
          <Route path="/ContractorView/Home" component={ContractorHome} />
          <Route path="/ClientView/ClientHome" component={ClientHome} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/" component={Home} exact />
          <Route component={Error} />
        </Switch>
    </div>
    </StockProvider>
  );
}

export default App;

