import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

import HomePage from "./components/homepage";
import TablePage from "./components/tablepage";

/* import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component'; */

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>DB Materials</h1>
            <div className="nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">HomePage</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/table" className="nav-link">TablePage</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={HomePage} />
          <Route path="/table" component={TablePage} />

        </div>



      </Router>
    );
  }
}

export default App;
