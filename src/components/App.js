import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import AstroList from './AstroList';
import CreateJournal from './CreateJournal';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Header from './Header';
import JournalDetail from './JournalDetail';
import Journal from './JournalList';
import SignIn from './SignIn';
import LoggedInHeader from './LoggedInHeader';
import SignUp from './SignUp';
import Wishlist from './Wishlist';

import { RequireAuth } from '../utils/auth-utils';

import '../styles/App.css';
import '../styles/style.css';

const TOKEN = 'TOKEN';

export default class App extends Component {

  state = {
    token: localStorage.getItem(TOKEN)
  }

  setToken = (token) => {
    this.setState({ token: token })
    localStorage.setItem(TOKEN, token)
  }

  clearToken = () => {
    this.setState({ token: '' })
    localStorage.setItem(TOKEN, '')
  }

  render() {
    return (
      <Router>
          { this.state.token ?  <LoggedInHeader clearToken={this.clearToken} /> : <Header /> }
          <Routes>
            <Route path='/' element={<SignIn setToken={this.setToken} />} />

            <Route path='/signup' element={<SignUp setToken={this.setToken} />} />

            <Route path="/main" element={
              <RequireAuth token={this.state.token} redirectTo="/">
                <Dashboard />
              </RequireAuth>
            } />

            <Route path="/astro-list" element={
              <RequireAuth token={this.state.token} redirectTo="/">
                <AstroList token={this.state.token}/>
              </RequireAuth>
            } />

            <Route path="/journal" element={
              <RequireAuth token={this.state.token} redirectTo="/">
                <Journal token={this.state.token}/>
              </RequireAuth>
            } />

            <Route path="/create" element={
              <RequireAuth token={this.state.token} redirectTo="/">
                <CreateJournal token={this.state.token}  />
              </RequireAuth>
            } />
            
            <Route path="/journal/:id" element={
              <RequireAuth token={this.state.token} redirectTo="/">
                <JournalDetail token={this.state.token} />
              </RequireAuth>
            } />

            <Route path="/wishlist" element={
              <RequireAuth token={this.state.token} redirectTo="/">
                <Wishlist token={this.state.token}/>
              </RequireAuth>
            } />
          </Routes>
        <Footer />
      </Router>
    )
  }
}
