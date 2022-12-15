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

const cuisines =["American", "Italian", "Indian", "Chinese", "French", "Japanese"];


const CardLists = cuisines.map((cuisine) => {
    return <CardList key= {cuisine.id}  cuisine = {cuisine} />
})

return (
    <>
    <div className="fake-location-tag-div">
        <span className="fake-location-tag">It looks like you're in Manhattan. </span>
    </div>
    <div>
        {CardLists}
    </div>
    </>
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
