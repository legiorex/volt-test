// Core
import React, { Component } from 'react';
import {render} from "react-dom";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";

import './App/bootstrap.css'
// import 'react-select/dist/react-select.css';

//Components
import Header from './components/Header';
import Customers from './components/Customers';
import Products from "./components/Products";



render(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route component={Customers} path="/customers" />
        <Route component={Products} path="/products" />
        <Redirect to="/customers" />
      </Switch>
    </div>
  </BrowserRouter>,

  document.getElementById("app-root")
);