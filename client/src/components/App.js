import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import logo from '../logo.svg';
import './App.css';

import Header from './Header';
const Landing = () => <h2>Landing stuff</h2>;
const Dashboard = () => <h2>Dashboard stuff</h2>;
const SurveyNew = () => <h2>SurveyNew stuff</h2>;
// import Header from './Header';
// import Landing from './Landing';
// import Dashboard from './Dashboard';
// import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="Container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
