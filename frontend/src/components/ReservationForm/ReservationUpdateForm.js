import './ReservationForm.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateReservation, receiveReservation } from '../../store/reservations';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchRestaurant } from '../../store/restaurants';

function ReservationUpdateForm() {
    const { state } = useLocation();
    const reservation = state.reservation;
    const dispatch = useDispatch();
    const restaurant = useSelector(state => state.restaurants[reservation.restaurantId]);
    useEffect(() => {
        dispatch(fetchRestaurant(reservation.restaurantId));
    }, [reservation.restaurantId, dispatch]);
    const [date, setDate] = useState(reservation.date);
    const [time, setTime] = useState(reservation.time);
    const [partySize, setPartySize] = useState(reservation.partySize);
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedReservation = { ...reservation, date, time, partySize };
        dispatch(updateReservation(updatedReservation));
    }
    debugger;
    return (
        <div>
            <h2 className='your-current-reservation'>Your current reservation</h2>
            <div className='update-card'>
                <div className="update-card-img">
                    <img src={restaurant.photoUrl} className='update-card-img'/>
                </div>
                <div className="update-card-description">
                    <h2 className="update-card-description-title">{restaurant.name}</h2>
                </div>
            </div>
            <hr class="border-between-update"></hr>
            <form onSubmit={handleSubmit}>
                <h3>Modify your reservation</h3>
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </label>
                <label>
                    Time:
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)}/>
                </label>
                <label>
                    Party Size:
                    <input type="number" value={partySize} onChange={(e) => setPartySize(e.target.value)}/>
                </label>
                <input type="submit" value="Make a new Reservation"/>
            </form>
        </div>
    )
}

export default ReservationUpdateForm;