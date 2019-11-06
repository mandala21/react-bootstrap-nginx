import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute  from "./components/PrivateRoute";
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import { AppLayout } from "./components/Containers";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" name="home" render={props=><Home {...props} />} />
          <Route exact path="/login" name="login" render={props=><Login {...props} />} />
          <PrivateRoute exact path="/dashboard" name="dashboard" component={AppLayout} />
          <Route exact path="*" name="notFound" render={props=><Page404 {...props} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
