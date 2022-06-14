import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './';
import About from './';

function App() {
  return(
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/login' component= {Login}/>
            <Route path='/about' component={About}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
