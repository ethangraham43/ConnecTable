json.reservation do
    json.extract! @reservation, :date, :time, :seats,
    :restaurant_id, :user_id
end