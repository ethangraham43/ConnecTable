# == Schema Information
#
# Table name: favorites
#
#  id            :bigint           not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :bigint           not null
#  user_id       :bigint           not null
#
# Indexes
#
#  index_favorites_on_restaurant_id              (restaurant_id)
#  index_favorites_on_user_id                    (user_id)
#  index_favorites_on_user_id_and_restaurant_id  (user_id,restaurant_id) UNIQUE
#
class Favorite < ApplicationRecord
    belongs_to :user
    belongs_to :restaurant
  end
