import './Card.css'
import { fetchRestaurants, getRestaurants} from '../../store/restaurants'
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router";
import { useEffect } from 'react';

const Card = () => {
    // const dispatch = useDispatch();
    // const { restaurantId } = useParams();
    // const restaurants = useSelector(getRestaurants());
    // useEffect(() => {
    //     dispatch(fetchRestaurants(restaurantId))
    // }, [restaurantId, dispatch])
   
    // const americanCuisine = [];

    return (
        <ul>
            
        {}
        <div className="card-div">
            <header>American Dining</header>
                <li>
                    <button type="button">
                        {/* <img src={restaurant.restaurant.photoUrl} alt=""></img> */}
                    </button>
                </li>
        </div>
        </ul>
    )
}
export default Card;
