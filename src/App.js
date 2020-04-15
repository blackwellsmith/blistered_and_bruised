import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./Home"
import { Unseen } from "./Unseen"
import { Seen } from "./Seen"
import { NoMatch } from "./NoMatch"
import MySound from "./assets/sounds/mainSound.mp3"
import { NavBar } from "./NavBar"
import './App.css';

function App() {
  return (
    <React.Fragment>
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
      </React.Fragment>  
      <div>
        <audio src={MySound} preload="auto" controls autoPlay loop />
      </div>
    </React.Fragment>
  );
}

export default App;
