import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header.js';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Main from './Main';
import AstroList from './AstroList';
import AstroDetail from './AstroDetail';
import JournalList from './JournalList';
import JournalDetail from './JournalDetail';
import Footer from './Footer';
import AboutUs from './AboutUs';

export default class App extends Component {

  render() {

    return (

      <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/main' component={Main}/>
            <Route exact path='/astro-list' component={AstroList}/>
            <Route exact path='/astro-detail' component={AstroDetail}/>
            <Route exact path='/journal-list' component={JournalList}/>
            <Route exact path='/journal-detail' component={JournalDetail}/>
            <Route exact path='/about-us' component={AboutUs}/>
          </Switch>
          <Footer />
      </Router>
    )
  }
}
