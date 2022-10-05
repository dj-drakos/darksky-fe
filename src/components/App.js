import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import AstroDisplay from './AstroDisplay';
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

export default function App() {
  const [stateToken, setStateToken] = useState(localStorage.getItem(TOKEN))

  const setLocalStorageToken = token => {
    localStorage.setItem(TOKEN, token)
    setStateToken(token)
  }

  const clearLocalStorageToken = () => {
    localStorage.removeItem(TOKEN)
    setStateToken(null)
  }

    return (
      <Router>
          { stateToken ? <LoggedInHeader clearToken={clearLocalStorageToken} /> : <Header /> }
          <Routes>
            <Route path='/signin' element={<SignIn setToken={setLocalStorageToken} />} />
            <Route path='/signup' element={<SignUp setToken={setLocalStorageToken} />} />
            <Route path="/" element={
              <RequireAuth token={stateToken} redirectTo="/signin">
                <Dashboard />
              </RequireAuth>
            } />

            <Route path="/astro" element={
              <RequireAuth token={stateToken} redirectTo="/signin">
                <AstroDisplay token={stateToken}/>
              </RequireAuth>
            } />

            <Route path="/journal" element={
              <RequireAuth token={stateToken} redirectTo="/signin">
                <Journal token={stateToken}/>
              </RequireAuth>
            } />

            <Route path="/create" element={
              <RequireAuth token={stateToken} redirectTo="/signin">
                <CreateJournal token={stateToken}  />
              </RequireAuth>
            } />
            
            <Route path="/journal/:id" element={
              <RequireAuth token={stateToken} redirectTo="/signin">
                <JournalDetail token={stateToken} />
              </RequireAuth>
            } />

            <Route path="/wishlist" element={
              <RequireAuth token={stateToken} redirectTo="/signin">
                <Wishlist token={stateToken}/>
              </RequireAuth>
            } />
          </Routes>
        <Footer />
      </Router>
    )
}
