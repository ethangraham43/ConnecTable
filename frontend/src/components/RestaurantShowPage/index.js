import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurant, fetchRestaurant } from "../../store/restaurants";
import { useEffect } from "react";
import './RestaurantShowPage.css';
import ReservationForm from '../ReservationForm';
import ErrorPage from "../ErrorPage";
import { createFavorite, deleteFavorite, fetchAllFavorites } from "../../store/favorites";
import { useHistory } from "react-router-dom";

const RestaurantShowPage = () => {
    const dispatch = useDispatch();
    const { restaurantId } = useParams();
    const restaurant = useSelector(getRestaurant(parseInt(restaurantId)));
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user);
    const favorite = useSelector(state => state.favorites.all && state.favorites.all.find(favorite => favorite.restaurant_id === restaurant.id));

    useEffect(() => {
        if (!restaurant) dispatch(fetchRestaurant(restaurantId));
        dispatch(fetchAllFavorites())
    }, [restaurantId,  dispatch]);

    if (!restaurant) {
        return (
            <ErrorPage />
        )
    }

    const handleClick = () => {
        if (!currentUser) {
            history.push('/');
        } else if (!favorite) {
            dispatch(createFavorite({ restaurant_id: restaurant.id, user_id: currentUser.id }));
        } else {
            dispatch(deleteFavorite(favorite.id));
        }
    };

    const handleFavorite = () => {
        return (
        favorite ? (
            <div className="inside-save-restaurant">
            <img className="save-restaurant-img"src={favorite ? "favorite-icon.svg" : "https://cdn.otstatic.com/cfe/11/images/ic_bookmark-f6a8ce.svg"} ></img>
            <div className="save-restaurant-div">Save this restaurant</div>
        </div>
        ) :
        (<p>x</p>)
        )
    }


    const reviewStars = (num) => {
        if (num === 4.0) {
            return (
                <div className="stars">
                <img className="full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/%3E%3C/svg%3E"></img>
                <img className="full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/%3E%3C/svg%3E"></img>
                <img className="full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/%3E%3C/svg%3E"></img>
                <img className="full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/%3E%3C/svg%3E"></img>
                </div>
            );
        } else if (num === 4.5) {
            return (
                <div className="stars">
                <img className="full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/%3E%3C/svg%3E"></img>
                <img className="full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/%3E%3C/svg%3E"></img>
                <img className="full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/%3E%3C/svg%3E"></img>
                <img className="full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/%3E%3C/svg%3E"></img>
                <img className="half-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23E1E1E1'/%3E%3Cpath d='M7.781.125 5.465 5.14l-5.256.784c-.105.041-.167.094-.188.156-.042.084-.021.167.062.251l3.786 3.886-.876 5.516c-.042.084-.01.157.094.219.021.021.063.031.125.031s.104-.01.125-.031L8 13.383V0c-.063 0-.136.042-.219.125z' fill='%23DA3743'/%3E%3C/g%3E%3C/svg%3E"></img>
                </div>
            );
        } else {
            return (
                <div className="stars">
                <img className="full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/%3E%3C/svg%3E"></img>
                <img className="full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/%3E%3C/svg%3E"></img>
                <img className="full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/%3E%3C/svg%3E"></img>
                <img className="full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/%3E%3C/svg%3E"></img>
                <img className="full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z' fill='%23DA3743'/%3E%3C/svg%3E"></img>
                </div>
            );
        }
    }

    return (
    <>
                        
                <img className="restaurant-image-show" src={restaurant.photoUrl}></img>
                <button className="save-restaurant-button" onClick={handleClick()}>
                    {handleFavorite}
                </button>
                <div className="rest-profile-with-reservation">
                <br/>
                <div className="restaurant-profile">
                    <ol className="restaurant-show-menu">
                        <li className="restaurant-show-menu-ov"><button className="restaurant-show-menu-ov">Overview</button></li>
                        <li className="restaurant-show-menu-ph"><button className="restaurant-show-menu-ph">Photos</button></li>
                        <li className="restaurant-show-menu-me"><button className="restaurant-show-menu-me">Menu</button></li>
                        <li className="restaurant-show-menu-re"><button className="restaurant-show-menu-re">Reviews</button></li>
                    </ol>
                    <h1 className="restaurant-name-title">{restaurant.name}</h1>
                <div className="title-details-div">
                    <div className="avg-rating-div">{reviewStars(restaurant.avgRating)}{restaurant.avgRating.toFixed(1)} </div>
                    <div className="reviews-div"> 
                    <svg className="reviews-logo"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M19,4 L5,4 C3.8954305,4 3,4.8954305 3,6 L3,15 C3,16.1045695 3.8954305,17 5,17 L11,17 L15.36,20.63 C15.6583354,20.8784924 16.0735425,20.9318337 16.4250008,20.7668198 C16.776459,20.6018059 17.0006314,20.2482681 17,19.86 L17,17 L19,17 C20.1045695,17 21,16.1045695 21,15 L21,6 C21,4.8954305 20.1045695,4 19,4 Z M19,15 L15,15 L15,17.73 L11.72,15 L5,15 L5,6 L19,6 L19,15 Z" fill="#2D333F" fill-rule="nonzero"></path></g></svg>
                    {restaurant.numReviews} Reviews </div>
                    <div className="price-div">
                    <svg className="price-logo"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M20,15 L20,9 L18.5,9 C18.2238576,9 18,8.77614237 18,8.5 L18,7 L6,7 L6,8.5 C6,8.77614237 5.77614237,9 5.5,9 L4,9 L4,15 L5.5,15 C5.77614237,15 6,15.2238576 6,15.5 L6,17 L18,17 L18,15.5 C18,15.2238576 18.2238576,15 18.5,15 L20,15 Z M4,5 L20,5 C21.1045695,5 22,5.8954305 22,7 L22,17 C22,18.1045695 21.1045695,19 20,19 L4,19 C2.8954305,19 2,18.1045695 2,17 L2,7 C2,5.8954305 2.8954305,5 4,5 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z" fill="#2D333F"></path></g></svg>
                    {restaurant.priceRange}</div>
                    <div className="cuisine-top-div">
                    <svg className="cuisine-logo"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M11,2 C12.1045695,2 13,2.8954305 13,4 L13,11 C13,12.1045695 12.1045695,13 11,13 L10,13 L10,21 C10,21.5522847 9.55228475,22 9,22 L8,22 C7.44771525,22 7,21.5522847 7,21 L7,13 L6,13 C4.8954305,13 4,12.1045695 4,11 L4,4 C4,2.8954305 4.8954305,2 6,2 L11,2 Z M11,11 L11,4 L10,4 L10,8.5 C10,8.77614237 9.77614237,9 9.5,9 C9.22385763,9 9,8.77614237 9,8.5 L9,4 L8,4 L8,8.5 C8,8.77614237 7.77614237,9 7.5,9 C7.22385763,9 7,8.77614237 7,8.5 L7,4 L6,4 L6,11 L11,11 Z M19.45,2 C19.7537566,2 20,2.24624339 20,2.55 L20,21 C20,21.5522847 19.5522847,22 19,22 L18,22 C17.4477153,22 17,21.5522847 17,21 L17,17 L16,17 C14.8954305,17 14,16.1045695 14,15 L14,7.45 C14,4.44004811 16.4400481,2 19.45,2 Z M16,15 L18,15 L18,4.32 C16.7823465,4.88673047 16.0026709,6.10692278 16,7.45 L16,15 Z" fill="#2D333F" fill-rule="nonzero"></path></g></svg>
                    {restaurant.cuisine}</div>
                </div>
                <div className="description-span">{restaurant.description}</div>
                </div>
            <ReservationForm restaurantId={parseInt(restaurantId)}/>
        </div>
        <div className="additional-information">
        <h4 className="additional-information">Additional Information</h4>
        <div className="neighborhood-div">
        <svg className="neighborhood-logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M11.0042221,7.00000436 C11.046625,6.34790658 11.405963,5.75411959 11.9710085,5.41509227 L14.9710085,3.61509227 C15.6043733,3.23507341 16.3956267,3.23507341 17.0289915,3.61509227 L20.0289915,5.41509227 C20.6314023,5.77653877 21,6.42755242 21,7.13007812 L21,17.9976974 C21,19.1022669 20.1045695,19.9976974 19,19.9976974 L11.0968245,19.9976974 C11.0647419,19.9992266 11.0324613,20 11,20 L5,20 C3.8954305,20 3,19.1045695 3,18 L3,9 C3,7.8954305 3.8954305,7 5,7 L11,7 C11.0014077,7 11.0028151,7.00000145 11.0042221,7.00000436 Z M11,9 L5,9 L5,18 L11,18 L11,9 Z M13,7 L13,18.0000782 L19,18.0000782 L19,7 L16,5.07741671 L13,7 Z M7.5,11 L8.5,11 C8.77614237,11 9,11.2238576 9,11.5 L9,12.5 C9,12.7761424 8.77614237,13 8.5,13 L7.5,13 C7.22385763,13 7,12.7761424 7,12.5 L7,11.5 C7,11.2238576 7.22385763,11 7.5,11 Z M7.5,14 L8.5,14 C8.77614237,14 9,14.2238576 9,14.5 L9,15.5 C9,15.7761424 8.77614237,16 8.5,16 L7.5,16 C7.22385763,16 7,15.7761424 7,15.5 L7,14.5 C7,14.2238576 7.22385763,14 7.5,14 Z M15.5,11 L16.5,11 C16.7761424,11 17,11.2238576 17,11.5 L17,12.5 C17,12.7761424 16.7761424,13 16.5,13 L15.5,13 C15.2238576,13 15,12.7761424 15,12.5 L15,11.5 C15,11.2238576 15.2238576,11 15.5,11 Z M15.5,14 L16.5,14 C16.7761424,14 17,14.2238576 17,14.5 L17,15.5 C17,15.7761424 16.7761424,16 16.5,16 L15.5,16 C15.2238576,16 15,15.7761424 15,15.5 L15,14.5 C15,14.2238576 15.2238576,14 15.5,14 Z M15.5,8 L16.5,8 C16.7761424,8 17,8.22385763 17,8.5 L17,9.5 C17,9.77614237 16.7761424,10 16.5,10 L15.5,10 C15.2238576,10 15,9.77614237 15,9.5 L15,8.5 C15,8.22385763 15.2238576,8 15.5,8 Z" fill="#2D333F"></path></g></svg>
            <span className="neighborhood-span">Neighborhood
                <p className="neighborhood-p">Manhattan</p>
            </span>
        </div>
        <div className="hours-div">
        <svg className="hours-logo"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M13,11 L14.5,11 C14.7761424,11 15,11.2238576 15,11.5 L15,12.5 C15,12.7761424 14.7761424,13 14.5,13 L12.5,13 L11.5,13 C11.2238576,13 11,12.7761424 11,12.5 L11,7.5 C11,7.22385763 11.2238576,7 11.5,7 L12.5,7 C12.7761424,7 13,7.22385763 13,7.5 L13,11 Z M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z" fill="#2D333F"></path></g></svg>
            <span className="hours-span">Hours of operation
                <p className="hours-p">From {restaurant.openTime} to {restaurant.closeTime}</p>
            </span>
        </div>
        <div className="phone-div">
        <svg className="phone-logo"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M11.1923881,7.19238816 C13.8147448,7.19238816 16.4332749,7.88002892 19.0481719,9.24949945 C20.3663707,9.93987064 21.1923881,11.3049175 21.1923881,12.7929562 L21.1923881,15.1923882 C21.1923881,16.2969577 20.2969576,17.1923882 19.1923881,17.1923882 L15.8386797,17.1923882 C14.9458358,17.1923934 14.1611367,16.600599 13.9157119,15.74215 C13.5311739,14.3971097 13.051748,13.8597684 12.4435462,13.8590555 L12.2445137,13.8590532 C11.9797378,13.8590516 11.9797378,13.8590516 11.1923912,13.8590525 L10.5908984,13.8590535 L9.94238815,13.8590549 C9.36404307,13.8590549 8.89692488,14.3907007 8.48907223,15.7623886 C8.23683842,16.610715 7.45704835,17.1923882 6.57201858,17.1923882 L3.19238815,17.1923882 C2.08781864,17.1923882 1.19238815,16.2969577 1.19238815,15.1923882 L1.19238815,12.7929431 C1.19239394,11.3049036 2.0184157,9.93985867 3.33661714,9.24949272 C5.95150798,7.88002719 8.5700348,7.19238816 11.1923881,7.19238816 Z M3.19238815,12.7929469 L3.19238815,15.1923882 L6.57201858,15.1923839 C7.20290417,13.0705928 8.26739372,11.8590549 9.94238599,11.8590549 L10.5908946,11.8590535 L11.1923885,11.8590525 C11.9797362,11.8590516 11.9797362,11.8590516 12.2445326,11.8590532 L12.4447301,11.8590562 C14.1421938,11.8610438 15.2370999,13.0882166 15.8386738,15.1923882 L19.1923881,15.1923882 L19.1923881,12.7929562 C19.1923881,12.0489367 18.7793784,11.3664115 18.1202811,11.021227 C15.7828612,9.79707646 13.4802133,9.19238816 11.1923881,9.19238816 C8.90456585,9.19238816 6.60192098,9.79707492 4.26450398,11.0212224 C3.60540308,11.3664055 3.19239104,12.0489299 3.19238815,12.7929469 Z" fill="#2D333F" fill-rule="nonzero" transform="translate(11.192388, 12.192388) rotate(-135.000000) translate(-11.192388, -12.192388)"></path></g></svg>
            <span className="phone-span">Phone number
                <p className="phone-p">{restaurant.phoneNumber}</p>
            </span>
        </div>
        <div className="location-div">
        <svg className="location-logo"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M12,2 C16.418278,2 20,5.581722 20,10 C20,12.8133333 17.5666667,16.59 12.7,21.33 C12.3111565,21.7111429 11.6888435,21.7111429 11.3,21.33 C6.43333333,16.59 4,12.8133333 4,10 C4,5.581722 7.581722,2 12,2 Z M12,4 C8.6862915,4 6,6.6862915 6,10 C6,11.21 6.8,14 12,19.21 C17.2,14 18,11.21 18,10 C18,6.6862915 15.3137085,4 12,4 Z M12,7 C13.6568542,7 15,8.34314575 15,10 C15,11.6568542 13.6568542,13 12,13 C10.3431458,13 9,11.6568542 9,10 C9,8.34314575 10.3431458,7 12,7 Z M12,9 C11.4477153,9 11,9.44771525 11,10 C11,10.5522847 11.4477153,11 12,11 C12.5522847,11 13,10.5522847 13,10 C13,9.44771525 12.5522847,9 12,9 Z" fill="#2D333F"></path></g></svg>
            <span className="location-span">Location
                <p className="location-p">{restaurant.address}</p>
            </span>
        </div>
        <div className="cuisine-div">
        <svg className="cuisine-logo"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M11,2 C12.1045695,2 13,2.8954305 13,4 L13,11 C13,12.1045695 12.1045695,13 11,13 L10,13 L10,21 C10,21.5522847 9.55228475,22 9,22 L8,22 C7.44771525,22 7,21.5522847 7,21 L7,13 L6,13 C4.8954305,13 4,12.1045695 4,11 L4,4 C4,2.8954305 4.8954305,2 6,2 L11,2 Z M11,11 L11,4 L10,4 L10,8.5 C10,8.77614237 9.77614237,9 9.5,9 C9.22385763,9 9,8.77614237 9,8.5 L9,4 L8,4 L8,8.5 C8,8.77614237 7.77614237,9 7.5,9 C7.22385763,9 7,8.77614237 7,8.5 L7,4 L6,4 L6,11 L11,11 Z M19.45,2 C19.7537566,2 20,2.24624339 20,2.55 L20,21 C20,21.5522847 19.5522847,22 19,22 L18,22 C17.4477153,22 17,21.5522847 17,21 L17,17 L16,17 C14.8954305,17 14,16.1045695 14,15 L14,7.45 C14,4.44004811 16.4400481,2 19.45,2 Z M16,15 L18,15 L18,4.32 C16.7823465,4.88673047 16.0026709,6.10692278 16,7.45 L16,15 Z" fill="#2D333F" fill-rule="nonzero"></path></g></svg>
            <span className="cuisine-span">Cuisine
                <p className="cuisine-p">{restaurant.cuisine}</p>
            </span>
        </div>
        <div className="parking-div">
        <svg className="parking-logo"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z M9.5,7.97771 C9.5,7.85871 9.596,7.74971 9.728,7.74971 L12.546,7.74971 C14.021,7.74971 15.233,8.94871 15.233,10.40071 C15.233,11.88771 14.021,13.09971 12.558,13.09971 L11.059,13.09971 L11.059,15.91771 C11.059,16.03671 10.951,16.14571 10.831,16.14571 L9.728,16.14571 C9.596,16.14571 9.5,16.03671 9.5,15.91771 L9.5,7.97771 Z M12.498,11.63571 C13.17,11.63571 13.685,11.09671 13.685,10.38871 C13.685,9.72971 13.17,9.22571 12.498,9.22571 L11.059,9.22571 L11.059,11.63571 L12.498,11.63571 Z" fill="#2D333F"></path></g></svg>
            <span className="parking-span">Parking details
                <p className="parking-p">None</p>
            </span>
        </div>
        </div>
    </>
    )
}

export default RestaurantShowPage;