import './UserProfileShow.css'
import { useSelector, useDispatch } from 'react-redux';
import { destroyReservation, fetchReservation } from '../../store/reservations';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchRestaurant } from '../../store/restaurants';

function UserProfileCard({reservation}) {
    const history = useHistory();

    const dispatch = useDispatch();
    const restaurant = useSelector(({restaurants}) => restaurants[reservation.restaurantId]);
    useEffect(() => {
        dispatch(fetchRestaurant(reservation.restaurantId));
    }, [reservation.restaurantId, dispatch])
    
      const handleCancelClick = () => {
        dispatch(destroyReservation(reservation.id))
        history.push(`/users/${reservation.userId}`)
      }

      if (!restaurant) {
        return null
      };

    const reservationDate = (resDate) => {
      const date = new Date(resDate);
      return date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "long",
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

    return (

        <div className="user-profile-card">
            <img src={restaurant.photoUrl} className='user-profile-card-img'/>
            <div className="user-profile-reservation-profile">
                <span className='user-profile-restaurant-name'>{restaurant.name}</span>
                <br />
                <span className='reservation-confirmed-w-checkmark'>
                <svg className="reservation-confirmed-checkmark"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fillRule="evenodd"><path className="reservation-confirmed-checkmark-path" d="M11.0355339,12.863961 L9.62132034,11.4497475 C9.23079605,11.0592232 8.59763107,11.0592232 8.20710678,11.4497475 C7.81658249,11.8402718 7.81658249,12.4734367 8.20710678,12.863961 L10.3284271,14.9852814 C10.5236893,15.1805435 10.7796116,15.2781746 11.0355339,15.2781746 C11.2914562,15.2781746 11.5473785,15.1805435 11.7426407,14.9852814 L15.9852814,10.7426407 C16.3758057,10.3521164 16.3758057,9.71895142 15.9852814,9.32842712 C15.5947571,8.93790283 14.9615921,8.93790283 14.5710678,9.32842712 L11.0355339,12.863961 Z M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z" fill="#2D333F"></path></g></svg>
                <span className='reservation-confirmed'> Reservation confirmed</span>
                </span>
                <br/>
                <span>
                    <span>
                        <svg className="user-show-person-icon"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M14.5734892,12.2877361 C17.0042328,12.8819383 18.7345621,14.3964534 19.7644773,16.8312813 C19.9208947,17.2010684 20.0014914,17.5984917 20.0014914,18 C20.0014914,19.6568477 18.658351,20.9999882 17.0015032,20.9999882 L6.99926923,21 C6.59776067,21 6.2003371,20.9194033 5.83054967,20.7629859 C4.3045986,20.1175199 3.59082441,18.3572386 4.23628386,16.8312848 C5.26612228,14.3966359 6.99627139,12.8821638 9.42673118,12.2878687 C7.97272602,11.4134027 7,9.82029752 7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 C17,9.82020554 16.0273723,11.4132417 14.5734892,12.2877361 Z M12,5 C10.3431458,5 9,6.34314575 9,8 C9,9.65685425 10.3431458,11 12,11 C13.6568542,11 15,9.65685425 15,8 C15,6.34314575 13.6568542,5 12,5 Z M17.9429826,17.6856919 C17.1294316,15.228564 15.1485327,14 12.000286,14 C8.85208947,14 6.87106303,15.2285248 6.05720667,17.6855743 L6.05721876,17.6855783 C5.88356446,18.2098444 6.16779141,18.7756206 6.69205743,18.9492749 C6.79348438,18.9828708 6.89964014,18.9999945 7.00648636,18.9999945 L16.99371,18.9999469 C17.5459684,18.9999469 17.9936623,18.552253 17.9936623,17.9999945 C17.9936623,17.8931928 17.9765523,17.7870807 17.9429826,17.6856919 Z" fill="#2D333F"></path></g></svg>
                        {reservation.seats}
                    </span>
                    <span>
                        <svg className="user-show-calendar-icon"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M17,5 L19,5 C20.1045695,5 21,5.8954305 21,7 L21,19 C21,20.1045695 20.1045695,21 19,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L7,5 L7,4 C7,3.44771525 7.44771525,3 8,3 C8.55228475,3 9,3.44771525 9,4 L9,5 L15,5 L15,4 C15,3.44771525 15.4477153,3 16,3 C16.5522847,3 17,3.44771525 17,4 L17,5 Z M19,9 L19,7 L5,7 L5,9 L19,9 Z M19,11 L5,11 L5,19 L19,19 L19,11 Z" fill="#2D333F"></path></g></svg>
                        {reservationDate(reservation.date)} at {reservationTime(reservation.time)}
                    </span>
                </span>
                <div className='modify-cancel-user-show'>
                <NavLink to={{
                  pathname: `/reservations/${reservation.id}/edit`,
                  state: { reservation }
                }} className="modify-button">
                  <p className='modify-user-show'>Modify</p> 
                </NavLink>
                    <p className='cancel-user-show' onClick={handleCancelClick}>Cancel</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard;