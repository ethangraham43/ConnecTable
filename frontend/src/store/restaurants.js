import csrfFetch from './csrf';

const SET_RESTAURANTS = 'restaurants/setRestaurants'
const SET_RESTAURANT = 'restaurants/setRestaurant'

const setRestaurants = restaurants => ({
    type: SET_RESTAURANTS,
    payload: restaurants
})
const setRestaurant = restaurants => ({
    type: SET_RESTAURANT,
    payload: restaurants
})


export const fetchRestaurants = filters => async dispatch => {
    const filterParams = new URLSearchParams(filters);
    const response = await csrfFetch(`/api/restaurants${filterParams}`);
    const data = await response.json();
    dispatch(setRestaurants(data.restaurants));
    return response;
  };

  export const fetchRestaurant = restaurantId => async dispatch => {
    const response = await csrfFetch(`/api/restaurants/${restaurantId}`);
    const data = await response.json();
    dispatch(setRestaurant(data.restaurant));
    return response;
  }
  