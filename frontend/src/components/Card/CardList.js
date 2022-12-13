import { useSelector } from 'react-redux';
import restaurantsReducer from '../../store/restaurants'
import CardItems from './CardItems'

function CardList({cuisine}) {
    const restaurants = useSelector(({restaurants}) => {
        return Object.values(restaurants).filter((restaurant) => {
            return restaurant.cuisine === cuisine;
        });
    });
    return (
        <>
        <h2 className="cuisine-header">{cuisine} Dining</h2>
        <ul className="list-of-card-items">
            <CardItems
            restaurants={restaurants} />
        </ul>
        </>
    );
}
export default CardList