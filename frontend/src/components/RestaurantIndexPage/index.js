import { getRestaurants, fetchRestaurants} from '../../store/restaurants';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import './RestaurantIndexPage.css'
import RestaurantIndexItem from './RestaurantIndexItem'


const RestaurantIndexPage = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(getRestaurants)

    useEffect(() => {
        dispatch(fetchRestaurants());
    }, []);

    const restaurantList = restaurants.map(restaurant => {
        return <RestaurantIndexItem restaurant = {restaurant} />
    })

    return (
        <>
        <div>
        <span  data-test="icLocation" data-testid="icLocation"><svg className="index-location-logo"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M12,2 C16.418278,2 20,5.581722 20,10 C20,12.8133333 17.5666667,16.59 12.7,21.33 C12.3111565,21.7111429 11.6888435,21.7111429 11.3,21.33 C6.43333333,16.59 4,12.8133333 4,10 C4,5.581722 7.581722,2 12,2 Z M12,4 C8.6862915,4 6,6.6862915 6,10 C6,11.21 6.8,14 12,19.21 C17.2,14 18,11.21 18,10 C18,6.6862915 15.3137085,4 12,4 Z M12,7 C13.6568542,7 15,8.34314575 15,10 C15,11.6568542 13.6568542,13 12,13 C10.3431458,13 9,11.6568542 9,10 C9,8.34314575 10.3431458,7 12,7 Z M12,9 C11.4477153,9 11,9.44771525 11,10 C11,10.5522847 11.4477153,11 12,11 C12.5522847,11 13,10.5522847 13,10 C13,9.44771525 12.5522847,9 12,9 Z" fill="#2D333F"></path></g></svg></span>
            <div className="index-location-state">New York/Tri-State Area
            </div>
            <div className="index-location-city">Manhattan
            <svg className="fake-dropdown-manhattan" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M11,11 L11,14.5 C11,14.7761424 10.7761424,15 10.5,15 L9.5,15 C9.22385763,15 9,14.7761424 9,14.5 L9,10.5 L9,9.5 C9,9.22385763 9.22385763,9 9.5,9 L14.5,9 C14.7761424,9 15,9.22385763 15,9.5 L15,10.5 C15,10.7761424 14.7761424,11 14.5,11 L11,11 Z" fill="#2D333F" transform="translate(12.000000, 12.000000) rotate(-135.000000) translate(-12.000000, -12.000000)"></path></g></svg>
            </div>
        </div>
        <header className="restaurant-index-header">
            <form className='index-search'>
                <div className='index-search'>
                    <input type="date" className="index-reservation-date-select"></input>
                    <select className="index-time-select" aria-label='Time selector' date-test="time-picker">
                        <option value="10:00:00">10:00 AM</option>
                        <option value="10:30:00">10:30 AM</option>
                        <option value="11:00:00">11:00 AM</option>
                        <option value="11:30:00">11:30 AM</option>
                        <option value="12:00:00">12:00 PM</option>
                        <option value="12:30:00">12:30 PM</option>
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
                    <select className="index-party-size-picker">
                        <option value="1">1 person</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6">6 people</option>
                        <option value="7">7 people</option>
                        <option value="8">8 people</option>
                        <option value="9">9 people</option>
                        <option value="10">10 people</option>
                        <option value="11">11 people</option>
                        <option value="12">12 people</option>
                        <option value="13">13 people</option>
                        <option value="14">14 people</option>
                        <option value="15">15 people</option>
                        <option value="16">16 people</option>
                        <option value="17">17 people</option>
                        <option value="18">18 people</option>
                        <option value="19">19 people</option>
                        <option value="20">20 people</option>
                        <option value="21">Larger party</option>
                    </select>
                </div>
                <div  className='index-search-bar-form' >
                    <input className="index-search-bar"placeholder='Location, Restaurant, or Cuisine'></ input>  
                </div>
                <button className="index-search-button" type="submit">Find a table</button>
            </form> 
    
        </header>

        <ul>
            <h3 className="restaurant-index-heading">36 restaurants available in Manhattan</h3>
            {restaurantList}
        </ul>
        </>
    )
}

export default RestaurantIndexPage