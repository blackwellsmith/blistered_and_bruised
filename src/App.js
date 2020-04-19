import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./Home"
import { Unseen } from "./Unseen"
import { Seen } from "./Seen"
import { NoMatch } from "./NoMatch"
import { NavBar } from "./NavBar"
import { Audio } from "./Audio"
import './App.css';

function App() {
  return (
    <React.Fragment>
      <React.Fragment>
      <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/audio" component={Audio} />
            <Route exact path="/seen" component={Seen} />
            <Route exact path="/unseen" component={Unseen} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>  
    </React.Fragment>
  );
}

export default App;
