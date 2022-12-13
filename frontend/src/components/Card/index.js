import './Card.css'
import { fetchRestaurants, getRestaurants} from '../../store/restaurants'
import { useSelector, useDispatch } from "react-redux";
import {useParams} from "react-router";
import { useEffect } from 'react';
import CardList from './CardList'

const Card = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(getRestaurants);
    useEffect(() => {
        dispatch(fetchRestaurants())
    }, [])
    const americanCuisine = ['American'];
    const italianCuisine = ['Italian'];
    const indianCuisine = ['Indian'];
    const chineseCuisine = ['Chinese'];
    const frenchCuisine = ['French'];
    const japaneseCuisine = ['Japanese'];

restaurants.forEach(restaurant => {
    if (restaurant.cuisine === 'American') {
        americanCuisine.push(restaurant)
    } else if (restaurant.cuisine === 'Italian') {
        italianCuisine.push(restaurant)
    } else if (restaurant.cuisine === 'Indian') {
        indianCuisine.push(restaurant)
    } else if (restaurant.cuisine === 'Chinese') {
        chineseCuisine.push(restaurant)
    } else if (restaurant.cuisine === 'French') {
        frenchCuisine.push(restaurant)
    } else if (restaurant.cuisine === 'Japanese') {
        japaneseCuisine.push(restaurant)
    }
})
const cuisines =[];
cuisines.push(americanCuisine);
cuisines.push(italianCuisine);
cuisines.push(indianCuisine);
cuisines.push(chineseCuisine);
cuisines.push(frenchCuisine);
cuisines.push(japaneseCuisine);
return (
    <div>
        {/* <img src="" alt=""> */}
        <div>
            <h3>{restaurants[1].name}</h3>
            <div>
    
            </div>
        </div>
    </div>
)
    //  return (
    //     // <CardList
    //     // restuaurants = {restaurants}
    //     // />
    //     // <div className="card-div">
    //     //     <header>American Dining</header>
    //     // </div>
    //    ) 
}
export default Card;
