import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../styles/general.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './Home';
import Contact from './Contact';

class Index extends Component {
  render() {
    return (

<Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
    );
  }
}

export default Index;
