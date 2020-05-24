import React from 'react';
import Login from "./login.js"
import SignUp from "./signup.js"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark flex-column flex-md-row bd-navbar">
          <div className="container">
               <a class="navbar-brand" href="http://localhost:3000/">
                 <i>BeIndian</i>
                 </a>
                 <div className="navbar-right container">
                 <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                <li className="nav-item ">
                    <Link className="nav-link " to={"/sign-in"}>Login</Link>      
                </li>
                <li className="nav-item ml-0-2">
                <Link className="nav-link" to={"/sign-up"}>SignUp</Link>
                </li>
             </ul>
             </div>
           </div>
        </nav>
        <Switch>
          
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        
      </header>
    </div>
    </Router>
  );
}

export default App;
