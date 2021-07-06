import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
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

const TOKEN = 'TOKEN';
export default class App extends Component {

  state = {
    token: localStorage.getItem(TOKEN)
  }

  login = (token) => {
    this.setState({ token:token })
    localStorage.setItem(TOKEN, token)
  }

  logout = () => {
    this.setState({ token:'' })
    localStorage.setItem(TOKEN, '')
  }

  render() {

    return (

      <Router>
          <Header logout={this.logout}/>
          <Switch>
            <Route exact path='/' login={this.login} component={LandingPage}/>
            <Route exact path='/signup' login={this.login} component={SignUp}/>
            <Route exact path="/main" render={(routerProps) =>
              this.state.token ? <Main token={this.props.token} {...routerProps} /> : <Redirect to="/" />
          } />
            <Route exact path="/astro-list" render={(routerProps) =>
              this.state.token ? <AstroList token={this.props.token} {...routerProps} /> : <Redirect to="/" />
          } />
            <Route exact path="/astro-detail" render={(routerProps) =>
              this.state.token ? <AstroDetail token={this.props.token} {...routerProps} /> : <Redirect to="/" />
          } />
            <Route exact path="/journal-list" render={(routerProps) =>
              this.state.token ? <JournalList token={this.props.token} {...routerProps} /> : <Redirect to="/" />
          } />
            <Route exact path="/journal-detail" render={(routerProps) =>
              this.state.token ? <JournalDetail token={this.props.token} {...routerProps} /> : <Redirect to="/" />
          } />
            <Route exact path='/about-us' component={AboutUs}/>
          </Switch>
          <Footer />
      </Router>
    )
  }
}
