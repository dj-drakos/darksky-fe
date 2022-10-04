import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import AstroList from './AstroList';
import CreateJournal from './CreateJournal';
import Footer from './Footer';
import Header from './Header';
import JournalDetail from './JournalDetail';
import Journal from './Journal';
import LandingPage from './LandingPage';
import LoggedInHeader from './LoggedInHeader';
import Main from './Main';
import SignUp from './SignUp';
import Wishlist from './Wishlist';
import '../styles/App.css';
import '../styles/style.css';

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
              <Main token={this.state.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/astro-list" render={
              (routerProps) =>
              this.state.token ? 
              <AstroList token={this.state.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/journal" render={
              (routerProps) =>
              this.state.token ? 
              <Journal token={this.state.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/create" render={
              (routerProps) =>
              this.state.token ? 
              <CreateJournal token={this.state.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/journal-detail/:entryId" render={
              (routerProps) =>
              this.state.token ? 
              <JournalDetail token={this.state.token} {...routerProps} /> : <Redirect to="/" />
          } />

            <Route exact path="/wishlist" render={
              (routerProps) =>
              this.state.token ? 
              <Wishlist token={this.state.token} {...routerProps} /> : <Redirect to="/" />
          } />
          </Switch>
          <Footer />
      </Router>
    )
  }
}
