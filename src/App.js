import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Page404 from './pages/Page404';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" name="home" render={props=><Home {...props} />} />
          <Route exact path="*" name="notFound" render={props=><Page404 {...props} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
