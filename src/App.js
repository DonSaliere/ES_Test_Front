import React from 'react';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import Navbar from './components/Navbar/Navbar';
import ContactsContainer from './components/Contacts/ContactsContainer';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Route path='/contacts'
          render={() => <ContactsContainer />} />
        <Route path='/profile'
          render={() => <ProfileContainer />} />
        <Route path='/login'
          render={() => <LoginContainer />} />
      </div>
    </div>
  );
}

export default App;
