import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from '.components/Header'

import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="container">
    <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
    </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
