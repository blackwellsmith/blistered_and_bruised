import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./Home"
import { Unseen } from "./Unseen"
import { Seen } from "./Seen"
import { NoMatch } from "./NoMatch"
import MySound from './sound'
import { NavBar } from "./NavBar"
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/seen" component={Seen} />
            <Route exact path="/unseen" component={Unseen} />
            <Route component={NoMatch} />
          </Switch>
      </Router>
      <div>
        <audio src="./assets/sounds/mainSound.mp3" autoPlay loop />
      </div>
    </React.Fragment>
  );
}

export default App;
