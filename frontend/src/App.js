
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <h1>ConnecTable</h1>
    <Navigation />
    <Switch>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
    </Switch>
    </>
  );
}

export default App;
