json.restaurant do
  json.partial! '/api/restaurants/restaurant', restaurant: @restaurant
end