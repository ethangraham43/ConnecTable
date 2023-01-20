import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './SearchSplash.css'
import { fetchRestaurants } from '../../store/restaurants';
import { useDispatch } from 'react-redux';

function SearchSplash() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/restaurants?searchValue=${searchValue}`);
  }

  return (
    <header className='splash-background'>
      <h1 className="splash-title">Find your table for any occasion</h1>
      <form className='splash-search' onSubmit={handleSearch}>
        <div className='search-select'>
          <input
            type="date"
            className="reservation-date-select"
          ></input>
          <select
            className="splash-time-select"
            aria-label='Time selector'
            date-test="time-picker"
          >
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
          <select className="party-size-picker">
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
        <div className='splash-search-bar-form'>
          <input
            className="splash-search-bar"
            placeholder='Location, Restaurant, or Cuisine'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
          </div>
          <div className="lets-go-navlink">
          <button type="submit" className="splash-search-button" >Search</button>
          </div>
      </form>
    </header>
  );
}


export default SearchSplash;

// const encodedSearchValue = encodeURIComponent(searchValue);
