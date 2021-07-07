import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import AboutUs from './AboutUs';
import AstroDetail from './AstroDetail';
import AstroList from './AstroList';
import Footer from './Footer';
import Header from './Header.js';
import JournalDetail from './JournalDetail';
import JournalList from './JournalList';
import LandingPage from './LandingPage';
import LoggedInHeader from './LoggedInHeader';
import Main from './Main';
import Planets from './Planets';
import SignUp from './SignUp';

const TOKEN = 'TOKEN';
export default class App extends Component {

  state = {
    token: localStorage.getItem(TOKEN)
  }

  login = (token) => {
    this.setState({ token: token })
    localStorage.setItem(TOKEN, token)
  }

  logout = () => {
    this.setState({ token: '' })
    localStorage.setItem(TOKEN, '')
  }

  render() {

    return (

      <Router>
          { this.state.token ?  <LoggedInHeader logout={this.logout} /> : <Header /> }
          <Switch>
            <Route exact path='/' render={
              (routerProps) => 
              <LandingPage login={this.login} {...routerProps} />
            } />

            <Route exact path='/signup' render={
              (routerProps) => 
              <SignUp login={this.login} {...routerProps} />
            } />

            <Route exact path="/main" render={
              (routerProps) =>
              this.state.token ? 
              <Main token={this.props.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/astro-list" render={
              (routerProps) =>
              this.state.token ? 
              <AstroList token={this.props.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/astro-detail" render={
              (routerProps) =>
              this.state.token ? 
              <AstroDetail token={this.props.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/journal-list" render={
              (routerProps) =>
              this.state.token ? 
              <JournalList token={this.props.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/journal-detail" render={
              (routerProps) =>
              this.state.token ? 
              <JournalDetail token={this.props.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/planets" render={
              (routerProps) =>
              this.state.token ? 
              <Planets token={this.props.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path='/about-us' component={AboutUs}/>
          </Switch>
          <Footer />
      </Router>
    )
  }
}
