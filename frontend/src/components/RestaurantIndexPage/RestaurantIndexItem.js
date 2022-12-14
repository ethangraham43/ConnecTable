import './RestaurantIndexPage.css'
import { NavLink } from 'react-router-dom';

function RestaurantIndexItem({restaurant}) {
    const dollarSign = (priceRange) => {
        if (priceRange === '$30 and under') {
            return (<>
            <span className="dollar-sign-dark">$</span>
            <span className="dollar-sign-dark">$</span>
            <span className="dollar-sign-light">$</span>
            <span className="dollar-sign-light">$</span>
            </>)
        } else if (priceRange === '$31 to $50') {
            return (<>
                <span className="dollar-sign-dark">$</span>
                <span className="dollar-sign-dark">$</span>
                <span className="dollar-sign-dark">$</span>
                <span className="dollar-sign-light">$</span>
                </>)
        } else if (priceRange === '$50 and over') {
            return (<>
                <span className="dollar-sign-dark">$</span>
                <span className="dollar-sign-dark">$</span>
                <span className="dollar-sign-dark">$</span>
                <span className="dollar-sign-dark">$</span>
                </>)
        }
    }
    const reviewStars = (num) => {
        if (num === 4.0) {
            return (
                <div className="stars">
                <img className="index-full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23FDAF08' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3C/svg%3E"></img>
                <img className="index-full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23FDAF08' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3C/svg%3E"></img>
                <img className="index-full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23FDAF08' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3C/svg%3E"></img>
                <img className="index-full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23FDAF08' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3C/svg%3E"></img>
                </div>
            );
        } else if (num === 4.5) {
            return (
                <div className="stars">
                <img className="index-full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23FDAF08' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3C/svg%3E"></img>
                <img className="index-full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23FDAF08' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3C/svg%3E"></img>
                <img className="index-full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23FDAF08' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3C/svg%3E"></img>
                <img className="index-full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23FDAF08' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3C/svg%3E"></img>
                <img className="index-half-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cg fill='none'%3E%3Cpath fill='%23D8D9DB' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3Cpath fill='%23FDAF08' d='M7.781.125 5.465 5.14l-5.256.784c-.105.041-.167.094-.188.156-.042.084-.021.167.062.251l3.786 3.886-.876 5.516c-.042.084-.01.157.094.219.021.021.063.031.125.031s.104-.01.125-.031L8 13.383V0c-.063 0-.136.042-.219.125z'/%3E%3C/g%3E%3C/svg%3E"></img>
                </div>
            );
        } else {
            return (
                <div className="stars">
                <img className="index-full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23FDAF08' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3C/svg%3E"></img>
                <img className="index-full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23FDAF08' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3C/svg%3E"></img>
                <img className="index-full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23FDAF08' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3C/svg%3E"></img>
                <img className="index-full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23FDAF08' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3C/svg%3E"></img>
                <img className="index-full-star" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23FDAF08' d='M3.213 15.984c-.063 0-.104-.01-.125-.031-.104-.063-.136-.136-.094-.219l.876-5.516L.083 6.331C0 6.247-.021 6.164.021 6.08c.021-.063.083-.115.188-.157l5.256-.783L7.781.125C7.864.042 7.937 0 8 0c.104 0 .177.042.219.125l2.347 5.015 5.226.784a.282.282 0 0 1 .188.157c.041.083.02.166-.063.25l-3.786 3.886.907 5.516a.297.297 0 0 1-.094.219c-.104.063-.188.063-.25 0L8 13.383l-4.662 2.57c-.021.021-.063.031-.125.031z'/%3E%3C/svg%3E"></img>
                </div>
            );
        }
    }
    return (
        <div className='restaurant-index-item'>
            <NavLink className="restaurant-card-navlink" to={`/restaurants/${restaurant.id}`}>
            <div className='restaurant-index-item-photo'>
                <img className="restaurant-index-item-img"src= {restaurant.photoUrl} />
            </div>
            <div className='restaurant-index-item-profile'>
                <h6 className="restaurant-index-item-header">{restaurant.name}</h6>
                <div className="index-ratings">
                {reviewStars(restaurant.avgRating)}
                <p className='index-num-ratings'>({restaurant.numReviews})</p>
                </div>
                <div className="index-item-description">
                    <span>{dollarSign(restaurant.priceRange)}</span>
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7897378/aegean-word-separator-dot-icon-md.png" class="dot-separator"></img>
                    <p className='index-item-words'>{restaurant.cuisine}</p>
                    <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7897378/aegean-word-separator-dot-icon-md.png" class="dot-separator"></img>
                    <p className='index-item-words'>Manhattan</ p>
                </div>
                <span className="booked-times-index">
                <svg className="booked-times-logo-index" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><g fill="none" fill-rule="evenodd"><path d="M15.5,5 C15.2239,5 15,5.223846 15,5.5 L15,6.5 C15,6.77615 15.2239,7 15.5,7 L17.5858,7 L14,10.58578 L12.70711,9.29291 L12.35355,8.93933 C12.15829,8.74408 11.84171,8.74408 11.64645,8.93933 L11.29289,9.29291 L5,15.5858 L5,7 L11.5,7 C11.77614,7 12,6.77615 12,6.5 L12,5.5 C12,5.22385 11.77614,5 11.5,5 L5,5 C3.89543,5 3,5.89542 3,7 L3,17 C3,18.1046 3.89543,19 5,19 L19,19 C20.1046,19 21,18.1046 21,17 L21,14.5 C21,14.2238 20.7761,14 20.5,14 L19.5,14 C19.2239,14 19,14.2238 19,14.5 L19,17 L6.4142,17 L12,11.41422 L13.2929,12.70709 L13.6464,13.06067 C13.8417,13.25592 14.1583,13.25592 14.3536,13.06067 L14.7071,12.70709 L19,8.41422 L19,10.5 C19,10.77615 19.2239,11 19.5,11 L20.5,11 C20.7761,11 21,10.77615 21,10.5 L21,6 L21,5.5 C21,5.223846 20.7761,5 20.5,5 L20,5 L15.5,5 Z" fill="#2D333F" fill-rule="nonzero"></path></g></svg>
                    Booked 22 times today
                </span>
            </div>
            </NavLink>
        </div>
    )
}

export default RestaurantIndexItem