import icon from './assets/connectable-favicon.png';
import {React, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import './index.css';
import SearchSplash from './components/SearchSplash';
import RestaurantShowPage from './components/RestaurantShowPage';
import RestaurantIndexPage from './components/RestaurantIndexPage';
import Card from './components/Card';
import UserProfileShow from './components/UserProfileShow';
import ReservationShow from './components/ReservationForm/ReservationShow';
import ReservationUpdateForm from './components/ReservationForm/ReservationUpdateForm';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';


function App() {


useEffect(() => {
  const favicon = document.getElementById('favicon');
  favicon.setAttribute('href', icon);
}, []);

  return (
    <>
    <Navigation />
    <Switch>
      <Route exact path="/">
        <SearchSplash />
        <Card/>
        <Footer />
      </Route>
    <Route exact path="/restaurants/:restaurantId">
          <RestaurantShowPage />
          <Footer />
      </Route>
      <Route exact path="/restaurants/">
          <RestaurantIndexPage/>
          <Footer />
      </Route>
      <Route exact path="/users/:userId">
          <UserProfileShow />
          <Footer />
      </Route>
        <Route exact path='/reservation/:reservationId'>
          <ReservationShow/>
          <Footer />
        </Route>
        <Route exact path="/reservations/:reservationId/edit">
          <ReservationUpdateForm/>
          <Footer />
        </Route>
        <Route exact path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
