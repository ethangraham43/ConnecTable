import CardItem from "./CardItem";

function CardItems({restaurants}) {

    return (
        <>
        {restaurants.map((restaurant) => (
            <li className="card-list-item">
                <CardItem restaurant = {restaurant} />
            </li>
        )
        )}
        </>
    )
}

export default CardItems;