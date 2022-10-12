import React, { useState } from 'react'
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
import { getSessionStorageToken, setSessionStorageToken, removeSessionStorageToken } from '../utils/browser-storage-utils'

import '../styles/App.css';
import '../styles/style.css';

export default function App() {
  const [stateToken, setStateToken] = useState(getSessionStorageToken())

  const setToken = token => {
    setSessionStorageToken(token)
    setStateToken(token)
  }

  const clearToken = () => {
    removeSessionStorageToken()
    setStateToken(null)
  }

    return (
      <Router>
          { stateToken ? <LoggedInHeader clearToken={clearToken} /> : <Header /> }
          <Routes>
            <Route path='/signin' element={<SignIn setToken={setToken} />} />
            <Route path='/signup' element={<SignUp setToken={setToken} />} />
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

            <Route path="/journal/create" element={
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
