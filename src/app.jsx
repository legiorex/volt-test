import React, { Component } from 'react';
import {render} from "react-dom";

import 'react-select/dist/react-select.css';

//Components
import Header from './components/Header';
import Customers from './components/Customers';



render(
  <div>
    <Header/>
    <Customers/>
  </div>,
  
  document.getElementById("app-root"));