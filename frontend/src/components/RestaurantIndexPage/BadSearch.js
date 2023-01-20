import './RestaurantIndexPage.css'

function BadSearch() {
    return (
        <div>
        <h3>0 restaurants match your search</h3>
        <h2>We didn't find a match for your search</h2>
        <p>Sorry, we couldn't find any results for your search. Try checking your spelling or using less specific keywords. There are no restaurants with availability within 30 miles of your search.</p>
        </div>
    )
}

export default BadSearch;