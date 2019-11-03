import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import DashboardUser from './pages/DashboardUser';
import AddUser from './pages/AddUser';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/DashboardUser" component={DashboardUser}/>
          <Route exact path="/addUser" component={AddUser}/>
        </div>
      </Router>
    );
  }
}

export default App;
