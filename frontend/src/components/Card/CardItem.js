import { useHistory } from "react-router-dom";

function CardItem(restaurant) {
    const history = useHistory();
    return (
        <div>
            {restaurant.name}
        </div>
    )
}

export default CardItem;