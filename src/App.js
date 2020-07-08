import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import "./Components/Login/Style.scss";
import { Login } from './Components/Login/Login'
import { Register } from './Components/Login/Register'
import { Dashboard } from './Components/Login/Dashboard'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Router>
      </div>
    );
  }
}
export default App;