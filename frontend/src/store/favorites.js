import csrfFetch from "./csrf";

const RECEIVE_FAVORITE = 'favorites/RECEIVE_FAVORITE'
const RECEIVE_FAVORITES = 'favorites/RECEIVE_FAVORITES'
const REMOVE_FAVORITE = 'favorites/REMOVE_FAVORITE'

export const receiveFavorite = (favorite) => {
    return {
        type: RECEIVE_FAVORITE,
        favorite
    }
}

export const receiveFavorites = (favorites) => {
    return {
      type: RECEIVE_FAVORITES,
      favorites
    };
  };

  export const removeFavorite = (favoriteId) => {
    return {
      type: REMOVE_FAVORITE,
      favoriteId
    };
  };

export const createFavorite = favorite => async dispatch => {
    try {
        const response = await csrfFetch("/api/favorites", {
            method: "POST",
            body: JSON.stringify({ favorite: favorite })
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }
        dispatch({ type: RECEIVE_FAVORITE, favorite: data });
        return data;
    } catch (err) {
        console.log(err);
    }
};


export const deleteFavorite = favoriteId => async dispatch => {
    const response = await csrfFetch(`/api/favorites/${favoriteId}`, {
        method: "DELETE"
    });
    dispatch({ type: REMOVE_FAVORITE, favoriteId });
    return response;
};

export const fetchAllFavorites = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/users/${userId}/favorites/`);
    const data = await response.json();
    dispatch(receiveFavorites(data));
};

function favoritesReducer(state={}, action) {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_FAVORITES:
        return { ...state, all: action.favorites };
      case RECEIVE_FAVORITE:
        return { ...state, current: action.favorite };
      case REMOVE_FAVORITE:
        const newFavorites = state.all.filter(favorite => favorite.id !== action.favoriteId);
        return { ...state, all: newFavorites };
      default:
        return state;
    }
}

export default favoritesReducer;