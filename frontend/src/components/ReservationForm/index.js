import './ReservationForm.css'
import { useSelector, useDispatch } from 'react-redux';
import { receiveReservation, getRestaurant} from '../../store/restaurants';
import { useState } from 'react';
import * as reservationActions from '../../store/reservations'
import { fetchRestaurant } from '../../store/restaurants';
import { useHistory, useParams } from 'react-router-dom';

function ReservationForm({ restaurantId }) {
    const dispatch = useDispatch();
    const [seats, setSeats] = useState(1);
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [errors, setErrors] = useState([]);
    // const {restaurantId} = useParams();

    const userId = useSelector(({session:  {user }}) => user? user.id: null);

    // if (!userId) return null;
    // const history = useHistory();

    // const submitResForm = () => {
    //     history.push(`/users/${userId}`)
    // }

    // const restaurant = useSelector(getRestaurant(restaurantId));

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userId === null) {setErrors(["You must sign in to make a reservation."])} else {
            const reservationData = { date, time, seats, restaurantId,  userId };
            //  debugger;
            setErrors([]);
    
            if (dispatch(reservationActions.createReservation(reservationData))) {
                return dispatch(reservationActions.createReservation(reservationData));
                
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="reservation-form">
                <h2 className="reservation-form-header">Make a reservation</h2>
                <div className='party-size-div'>
                    <label className="party-size-label">Party Size</label>
                    <div className="party-size-selector-div" value="2">
                        <select className='party-size-selector' value={seats} onChange={(e) => setSeats(e.target.value)}>
                            <option className="party-size-option" value="1">1 person</option>
                            <option className="party-size-option" value="2" selected>2 people</option>
                            <option className="party-size-option" value="3">3 people</option>
                            <option className="party-size-option" value="4">4 people</option>
                            <option className="party-size-option" value="5">5 people</option>
                            <option className="party-size-option" value="6">6 people</option>
                            <option className="party-size-option" value="7">7 people</option>
                            <option className="party-size-option" value="8">8 people</option>
                            <option className="party-size-option" value="9">9 people</option>
                            <option className="party-size-option" value="10">10 people</option>
                            <option className="party-size-option" value="11">11 people</option>
                            <option className="party-size-option" value="12">12 people</option>
                            <option className="party-size-option" value="13">13 people</option>
                            <option className="party-size-option" value="14">14 people</option>
                            <option className="party-size-option" value="15">15 people</option>
                            <option className="party-size-option" value="16">16 people</option>
                            <option className="party-size-option" value="17">17 people</option>
                            <option className="party-size-option" value="18">18 people</option>
                            <option className="party-size-option" value="19">19 people</option>
                            <option className="party-size-option" value="20">20 people</option>
                        </select>
                    </div>
                </div>
                <div className='date-time-labels'>
                    <label for="date" className="date-reservation-label">Date</label>
                    <label for="time" className="time-reservation-label">Time</label>
                </div>
                <div className="date-time-pickers">
                    <input type="date" className="date-selector" value={date} onChange={(e) => setDate(e.target.value)}>
                    </input>
                    <select className="time-selector" value={time} onChange={(e) => setTime(e.target.value)}>
                    <option value="12:30:00" selected>12:30 PM</option>
                        <option value="13:00:00">1:00 PM</option>
                        <option value="13:30:00">1:30 PM</option>
                        <option value="14:00:00">2:00 PM</option>
                        <option value="14:30:00">2:30 PM</option>
                        <option value="15:00:00">3:00 PM</option>
                        <option value="15:30:00">3:30 PM</option>
                        <option value="16:00:00">4:00 PM</option>
                        <option value="16:30:00">4:30 PM</option>
                        <option value="17:00:00">5:00 PM</option>
                        <option value="17:30:00">5:30 PM</option>
                        <option value="18:00:00">6:00 PM</option>
                        <option value="18:30:00">6:30 PM</option>
                        <option value="19:00:00">7:00 PM</option>
                        <option value="19:30:00">7:30 PM</option>
                        <option value="20:00:00">8:00 PM</option>
                        <option value="20:30:00">8:30 PM</option>
                        <option value="21:00:00">9:00 PM</option>
                        <option value="21:30:00">9:30 PM</option>
                        <option value="22:00:00">10:00 PM</option>
                        <option value="22:30:00">10:30 PM</option>
                        <option value="23:00:00">11:00 PM</option>
                        <option value="23:30:00">11:30 PM</option>
                    </select>
                </div>
                {errors.map(error => <p className="error"key={error}>{error}</p>)}
                <button className="reservation-search-button" type="submit">Make a Reservation </button>
                <section className='reservation-form-footer'><span><span data-test="icSocialProof" data-testid="icSocialProof"><svg className='reservation-form-footer-logo'viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M15.5,5 C15.2239,5 15,5.223846 15,5.5 L15,6.5 C15,6.77615 15.2239,7 15.5,7 L17.5858,7 L14,10.58578 L12.70711,9.29291 L12.35355,8.93933 C12.15829,8.74408 11.84171,8.74408 11.64645,8.93933 L11.29289,9.29291 L5,15.5858 L5,7 L11.5,7 C11.77614,7 12,6.77615 12,6.5 L12,5.5 C12,5.22385 11.77614,5 11.5,5 L5,5 C3.89543,5 3,5.89542 3,7 L3,17 C3,18.1046 3.89543,19 5,19 L19,19 C20.1046,19 21,18.1046 21,17 L21,14.5 C21,14.2238 20.7761,14 20.5,14 L19.5,14 C19.2239,14 19,14.2238 19,14.5 L19,17 L6.4142,17 L12,11.41422 L13.2929,12.70709 L13.6464,13.06067 C13.8417,13.25592 14.1583,13.25592 14.3536,13.06067 L14.7071,12.70709 L19,8.41422 L19,10.5 C19,10.77615 19.2239,11 19.5,11 L20.5,11 C20.7761,11 21,10.77615 21,10.5 L21,6 L21,5.5 C21,5.223846 20.7761,5 20.5,5 L20,5 L15.5,5 Z" fill="#2D333F" fill-rule="nonzero"></path></g></svg></span>Booked 22 times today</span></section>
            </div>
        </form>
    )
}

export default ReservationForm;