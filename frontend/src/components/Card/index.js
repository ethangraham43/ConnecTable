import './Card.css'
import { fetchRestaurants, getRestaurants} from '../../store/restaurants'
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router";
import { useEffect, useState } from 'react';
import CardList from './CardList'

const Card = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(getRestaurants);
    const [city, setCity] = useState(null);

    useEffect(() => {
        dispatch(fetchRestaurants());
      
        if ("geolocation" in navigator) {

          navigator.geolocation.getCurrentPosition((position) => {

            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
      
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=YOUR_API_KEY`)
              .then(response => response.json())
              .then(data => {
                const cityComponent = data.results[0].address_components.find(
                  component => component.types.includes("locality")
                );
      
                const city = cityComponent ? cityComponent.long_name : "Unknown";
                setCity(city);
              });
          });
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }, []);
      

const cuisines =["American", "Italian", "Indian", "Chinese", "French", "Japanese"];


const CardLists = cuisines.map((cuisine) => {
    return <CardList key= {cuisine.id}  cuisine = {cuisine} />
})

return (
    <>
    <div className="fake-location-tag-div">
        <span className="fake-location-tag">It looks like you're in {city ? city : "Manhattan"}. </span>
    </div>
    <div>
        {CardLists}
    </div>
    </>
)
}
export default Card;
