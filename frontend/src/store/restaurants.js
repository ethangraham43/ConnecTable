import csrfFetch from './csrf';

const RECEIVE_RESTAURANTS = 'restaurants/RECEIVE_RESTAURANTS'
const RECEIVE_RESTAURANT = 'restaurants/RECEIVE_RESTAURANT'

export const receiveRestaurants = (restaurants) => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

export const receiveRestaurant = (restaurant) => ({
    type: RECEIVE_RESTAURANT,
    restaurant
})


export const getRestaurants = (state) => state.restaurants ? Object.values(state.restaurants) : [];
export const getRestaurant= (restaurantId) => ({restaurants}) => {
  return restaurants[restaurantId] ? restaurants[restaurantId] : null;
}


export const fetchRestaurants = (searchValue) => async (dispatch) => {
  let url = '/api/restaurants/';
  if (searchValue) {
    url += `?search=${searchValue}`;
  }
  const response = await csrfFetch(url);
  const data = await response.json();
  dispatch(receiveRestaurants(data));
};

  export const fetchRestaurant = (restaurant) => async (dispatch) => {
    const response = await csrfFetch(`/api/restaurants/${restaurant}`);
    const data = await response.json();
    dispatch(receiveRestaurant(data));
  }

  function restaurantsReducer(state = {}, action) {
    const newState = { ...state };
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return { ...newState, ...action.restaurants}
      case RECEIVE_RESTAURANT:
        newState[action.restaurant.id] = action.restaurant;
        return newState;
      default:
        return state;
    }
  }

  export default restaurantsReducer;
  