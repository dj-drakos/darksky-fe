import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header.js';

export default class App extends Component {

  render() {

    return (

      <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/main' component={Main}/>
            <Route exact path='/astrolist' component={AstroList}/>
            <Route exact path='/astrodetail' component={AstroDetail}/>
            <Route exact path='/loglist' component={LogList}/>
            <Route exact path='/logdetail' component={LogDetail}/>
          </Switch>
      </Router>
    )
  }
}
