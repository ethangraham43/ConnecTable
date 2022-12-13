
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import './index.css';
import SearchSplash from './components/SearchSplash';
import RestaurantShowPage from './components/RestaurantShowPage';
import RestaurantIndexPage from './components/RestaurantIndexPage';
import Card from './components/Card';


function App() {
  return (
    <>
    <Navigation />
    <Switch>
      <Route exact path="/">
        <SearchSplash />
        <Card/>
      </Route>
    <Route path="/restaurants/:restaurantId">
          <RestaurantShowPage />
      </Route>
      <Route path="/restaurants/">
          <RestaurantIndexPage/>
      </Route>
      </Switch>
    </>
  );
}

export default App;
