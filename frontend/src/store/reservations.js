import csrfFetch from "./csrf"

export const RECEIVE_RESERVATION = 'reservations/RECEIVE_RESERVATION'
export const RECEIVE_RESERVATIONS = 'reservations/RECEIVE_RESERVATIONS'
export const REMOVE_RESERVATION = 'reservations/REMOVE_RESERVATION'

export const receiveReservations = reservations => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})

export const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
})

export const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    payload: reservationId
})

export const getReservations = (state) => Object.values(state.reservations);

export const fetchReservations = () => async (dispatch) => {
    const response = await fetch('/api/reservations/');
    const data = await response.json();
    dispatch(receiveReservations(data));
}

export const fetchReservation = (reservationId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`);
    const data = await response.json();
    dispatch(receiveReservation(data.reservation));
    return response;
  };

export const createReservation = reservation => async dispatch => {
    const response = await csrfFetch("/api/reservations", {
        method: "POST",
        body: JSON.stringify(reservation)
      });
      const data = await response.json();
      dispatch(receiveReservation(data));
    //   return data;
    }


    export const destroyReservation = (reservationId) => async dispatch => {
        const response = await csrfFetch(`/api/reservations/${reservationId}`, {
            method: "DELETE"
          });
          dispatch(removeReservation(reservationId));
          return response;
    }

    export const updateReservation = (reservation) => async (dispatch) => {
        const response = await fetch(`/api/reservations/${reservation.id}`, {
            method: 'PATCH',
            body: JSON.stringify(reservation),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        dispatch(receiveReservation(data));
    };

    function reservationsReducer(state={}, action) {
        const newState = { ...state };
        switch (action.type) {
            case RECEIVE_RESERVATIONS:
                return action.reservations;
            case RECEIVE_RESERVATION:
                newState[action.reservation.id] = action.reservation;
                return newState;
            case REMOVE_RESERVATION: {
                delete newState[action.payload];
                return newState;
                }
            default:
                return state;
        }
    }

    export default reservationsReducer;
