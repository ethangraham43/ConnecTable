# == Schema Information
#
# Table name: cuisine_restaurants
#
#  id            :bigint           not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  cuisine_id    :integer          not null
#  restaurant_id :integer          not null
#
class CuisineRestaurant < ApplicationRecord
end
