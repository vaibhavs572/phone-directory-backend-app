import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PhoneInput from "./components/phonedisplay.component";
import EditList from "./components/edit-list.component";
import PhoneList from "./components/todos-list.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            <Link to="/" className="navbar-brand">PHONE DIRECTORY</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Number List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">ADD Contact</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={PhoneList} />
          <Route path="/edit/:id" component={EditList} />
          <Route path="/create" component={PhoneInput} />
        </div>
      </Router>
    );
  }
}

export default App;
