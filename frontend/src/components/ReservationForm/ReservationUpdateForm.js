import './ReservationForm.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateReservation, receiveReservation, fetchReservation } from '../../store/reservations';
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { fetchRestaurant } from '../../store/restaurants';

function ReservationUpdateForm() {
    const history = useHistory();
    const { state } = useLocation();
    const reservation = state.reservation;
    const dispatch = useDispatch();
    const restaurant = useSelector(state => state.restaurants[reservation.restaurantId]);
    const [seats, setSeats] = useState(1);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("2000-02-01T12:00:00");
    const [error, setError] = useState(null);
    useEffect(() => {
        dispatch(fetchRestaurant(reservation.restaurantId));
    }, [dispatch, reservation.restaurantId]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            // Create separate date and time constants
            dispatch(updateReservation({
                id: reservation.id,
                seats: Number(seats),
                date: new Date(date).toISOString(),
                time: ('2023-01-26T'+time+'.000Z'),
                userId: reservation.userId,
                restaurantId: reservation.restaurantId
            }));
            history.replace({ pathname: `/users/${reservation.userId}`});
        } catch (error) {
            setError(error.message);
        }
    }

    const reservationDate = (resDate) => {
        const date = new Date(resDate);
        return date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          timeZone: "UTC"
        });
    };
  
    const reservationTime = (resTime) => {
        const currentDate = new Date(resTime)
        const hour = (currentDate.getHours() - 7).toString();
        const minutes = currentDate.getMinutes().toString();
        const actualMinutes = (minutes==="0") ? '00' : '30';
        const actualHour = (hour === "0") ? '12' : hour
        return `${actualHour}:${actualMinutes} PM`
    }

    if (!reservation || !restaurant) {
        return null
    };
    return (
        <div>
            {error && <div>{error}</div>}
            <h2 className='your-current-reservation'>Your current reservation</h2>
            <div className='update-card'>
            <div className="update-card-img">
                    <img src={restaurant.photoUrl} className='update-card-img'/>
                </div>
                <div className="update-card-description">
                    <h2 className="update-card-description-title">{restaurant.name}</h2>
                    <div className='description-ul-div'>
                        <ul className='description-ul'>
                            <li className='update-description-li'>
                            <svg className="hours-logo"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M17,5 L19,5 C20.1045695,5 21,5.8954305 21,7 L21,19 C21,20.1045695 20.1045695,21 19,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L7,5 L7,4 C7,3.44771525 7.44771525,3 8,3 C8.55228475,3 9,3.44771525 9,4 L9,5 L15,5 L15,4 C15,3.44771525 15.4477153,3 16,3 C16.5522847,3 17,3.44771525 17,4 L17,5 Z M19,9 L19,7 L5,7 L5,9 L19,9 Z M19,11 L5,11 L5,19 L19,19 L19,11 Z" fill="#2D333F"></path></g></svg>
                                <span className='update-description-span'>{reservationDate(reservation.date)}</span>
                            </li>
                            <li className='update-description-li'>
                            <svg className="hours-logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M13,11 L14.5,11 C14.7761424,11 15,11.2238576 15,11.5 L15,12.5 C15,12.7761424 14.7761424,13 14.5,13 L12.5,13 L11.5,13 C11.2238576,13 11,12.7761424 11,12.5 L11,7.5 C11,7.22385763 11.2238576,7 11.5,7 L12.5,7 C12.7761424,7 13,7.22385763 13,7.5 L13,11 Z M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z" fill="#2D333F"></path></g></svg>
                                <span className='update-description-span'>{reservationTime(reservation.time)}</span>
                            </li>
                            <li className='update-description-li'>
                            <svg className="hours-logo"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M14.5734892,12.2877361 C17.0042328,12.8819383 18.7345621,14.3964534 19.7644773,16.8312813 C19.9208947,17.2010684 20.0014914,17.5984917 20.0014914,18 C20.0014914,19.6568477 18.658351,20.9999882 17.0015032,20.9999882 L6.99926923,21 C6.59776067,21 6.2003371,20.9194033 5.83054967,20.7629859 C4.3045986,20.1175199 3.59082441,18.3572386 4.23628386,16.8312848 C5.26612228,14.3966359 6.99627139,12.8821638 9.42673118,12.2878687 C7.97272602,11.4134027 7,9.82029752 7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 C17,9.82020554 16.0273723,11.4132417 14.5734892,12.2877361 Z M12,5 C10.3431458,5 9,6.34314575 9,8 C9,9.65685425 10.3431458,11 12,11 C13.6568542,11 15,9.65685425 15,8 C15,6.34314575 13.6568542,5 12,5 Z M17.9429826,17.6856919 C17.1294316,15.228564 15.1485327,14 12.000286,14 C8.85208947,14 6.87106303,15.2285248 6.05720667,17.6855743 L6.05721876,17.6855783 C5.88356446,18.2098444 6.16779141,18.7756206 6.69205743,18.9492749 C6.79348438,18.9828708 6.89964014,18.9999945 7.00648636,18.9999945 L16.99371,18.9999469 C17.5459684,18.9999469 17.9936623,18.552253 17.9936623,17.9999945 C17.9936623,17.8931928 17.9765523,17.7870807 17.9429826,17.6856919 Z" fill="#2D333F"></path></g></svg>
                                <span className='update-description-span'>{reservation.seats} people</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='update-input-container'>
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
                    <label className="update-input-label">Date:</label>
                    <input type="date" className="date-selector" min={new Date().toISOString().split('T')[0]}  value={date} onChange={(e) => setDate(e.target.value)}
                    />
                    <label className="update-input-label">Time:</label>
                    <select className="update-time-selector" value={time} onChange={(e) => setTime(e.target.value)}>
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
[                       <option value="20:30:00">8:30 PM</option>
                    <option value="21:00:00">9:00 PM</option>
                    <option value="21:30:00">9:30 PM</option>
                    <option value="22:00:00">10:00 PM</option>
                    <option value="22:30:00">10:30 PM</option>
                    <option value="23:00:00">11:00 PM</option>
                    <option value="23:30:00">11:30 PM</option>]
                    </select>
                    <button className='update-button'>Update reservation</button>
                </div>
            </form>
        </div>
    
    )
}
export default ReservationUpdateForm;




