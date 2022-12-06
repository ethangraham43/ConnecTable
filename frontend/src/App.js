
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import './index.css';

function App() {
  return (
    <>
    <h1>ConnecTable</h1>
    <Switch>
    <button path="/signup" value="Sign Up">
      <SignupFormPage />
    </button>
    <Navigation />
    </Switch>
    </>
  );
}

export default App;
