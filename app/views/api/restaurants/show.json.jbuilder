# json.restaurant do
  json.partial! '/api/restaurants/restaurant', restaurant: @restaurant
  json.photoUrl @restaurant.photo.url
# end