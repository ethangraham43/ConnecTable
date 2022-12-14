import CardItem from "./CardItem";

function CardItems({restaurants}) {

    return (
        <>
        {restaurants.map((restaurant) => (
            <div className="card-list-item">
                <CardItem restaurant = {restaurant} />
            </div>
        )
        )}
        </>
    )
}

export default CardItems;