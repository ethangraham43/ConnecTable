# README

<img width="193" alt="Screen Shot 2022-12-15 at 7 43 10 PM" src="https://user-images.githubusercontent.com/112725448/207996277-87ca5ad5-c001-4221-bf29-53b4415850f8.png">

## Overview
[ConnecTable](https://connectable.onrender.com) is an [OpenTable](https://www.opentable.com/) clone that creates a platform for users to book reservations at their favorite reservations.

## Functionality and MVPs
- Hosting on Render
- New Account creation, login, and guest/demo login
- Restaurants listed and with individual show pages
- Ability to make update and destroy reservations
- Search functionality for restaurants
- Ability to create update and destroy a list of favorite restaurants

## Technologies

- Ruby 
- Rails 
- JavaScript 
- CSS3 
- HTML5 
- AWS 
- React 
- Redux 
- SQLite 
- postgresql

## Technical Highlights

### Restaurant cards sorted by cuisine with show pages

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/112725448/208018085-c7641aa0-8bc0-42d1-8ae1-d5e73df133e1.gif)

ConnecTable opens with the same style of splash page as the opening page of OpenTable. Sorted by cuisine, users can separately view each of the cuisines' list of restaurants. Users make click on different restaurant cards and view the show page of the specified restaurant. These show pages contain an enlarged picture of the restaurant and a plethora of details that are also on OpenTable.

```
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
```

### User can create and delete reservations

![Screen-2022-12-15-232428](https://user-images.githubusercontent.com/112725448/208022161-068e2b36-6b86-4058-ae87-e2acf8dbbea2.gif)

Users are able to create as many reservations as they wish at different restaurants. A user may not make the two reservations at the same restaurant. Users can also delete the reservation at any point. 

```
    const dispatch = useDispatch();
    const [seats, setSeats] = useState(1);
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [errors, setErrors] = useState([]);
    const userId = useSelector(({session:  {user }}) => user.id );

    const history = useHistory();


    
    const handleSubmit = (e) => {
        e.preventDefault();
        const reservationData = { date, time, seats, restaurantId,  userId };

        setErrors([]);

        return dispatch(reservationActions.createReservation(reservationData));
    }

```

## Extra Code Snippet

Here is a snippet from my search functionality on the frontend: 

```
    const filteredRestaurantList = 
    searchValue && searchValue.length > 0 
    ? restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) || restaurant.cuisine.toLowerCase().includes(searchValue.toLowerCase())
    }).map(restaurant => {
        return <RestaurantIndexItem restaurant={restaurant} />
    })
    : restaurants.map(restaurant => {
        return <RestaurantIndexItem restaurant={restaurant} />
    });


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/restaurants?searchValue=${search}`);
      }
```

