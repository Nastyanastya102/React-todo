import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from '../nav/navig.js';

import Main from './main.js';
import Warn from './warn.js';
import About from './about.js';

export default function Path (props){
    return(
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/about" component={About} />
                <Route path="/warn" component={Warn} />
            </Switch>
        </Router>
    )
}