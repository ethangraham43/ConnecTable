@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.partial! 'api/restaurants/restaurant', restaurant: restaurant
        json.photoUrl restaurant.photo.url
    end
end
