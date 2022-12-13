import restaurantsReducer from '../../store/restaurants'
import CardItem from './CardItem'

function CardList(restaurants) {
    <>
    <heading>Restaurants</heading>
    {restaurants.map(restaurant => (
        <CardItem
        key={restaurant.id}
        restaurant={restaurant}
        />
    ))}
    </>
}
export default CardList