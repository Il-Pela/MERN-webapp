import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

import HomePage from "./components/homepage";
import TablePage from "./components/tablepage";

class App extends Component {

  constructor(props) {
    super(props);

    this.update = this.update.bind(this);

    this.state = {
      material_name: '',
      chemical_composition: {
        SiO2: '',
        Al2O3: '',
        NaO3: '',
        Fe2O3: '',
        K2O: '',
        TiO2: '',
        CaO: '',
        MgO: '',
        P2O5: '',
        SO3: ''
      },
      alcaline: {
        MOH: '',
        M2: '',
        M: '',
        RM: '',
      },
      property: {
        first: '',
        second: ''
      },
      application: '',
      curing: {
        value: Number(0),
        time: ''
      },
      filename: ''
    };
  }

  update = async function(currState) {
    await this.setState(currState);
  }

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


          {/* <Route path="/" exact component={HomePage} />
          <Route path="/table" component={TablePage} /> */}

          <Switch>
            <Route path="/table">
              <TablePage />
            </Route>
            <Route path="/">
              <HomePage onChange={this.update}
                        material={this.state}
              />
            </Route>
          </Switch>

        </div>

      </Router>
    );
  }
}

export default App;
