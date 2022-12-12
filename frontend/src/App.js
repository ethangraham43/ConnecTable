
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import './index.css';
import SearchSplash from './components/SearchSplash';
import RestaurantShowPage from './components/RestaurantShowPage';


function App() {
  return (
    <>
    <Navigation />
    <Switch>
      <Route exact path="/">
        <SearchSplash />
      </Route>
    <Route path="/restaurants/:restaurantId">
          <RestaurantShowPage />
      </Route>
      </Switch>
    </>
  );
}

export default App;
