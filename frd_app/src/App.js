import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // Main
} from "react-router-dom";

import Login from './Components/Login';
import About from './Components/About';
// import Main from './Components/Main';
// import Routes from './Routes';

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

              <li>
                <Link to="/">Main</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/login' component= {Login}/>
            <Route path='/about' component={About}/>
            {/* <Route path='/main' component={Main}/> */}
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
