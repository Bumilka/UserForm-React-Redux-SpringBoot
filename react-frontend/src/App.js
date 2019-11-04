import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from './layout/Navbar';
import ListUser from './pages/ListUser';
import AddUser from './pages/AddUser';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/listUsers" component={ListUser} />
            <Route exact path="/addUser" component={AddUser} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
