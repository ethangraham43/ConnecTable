# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  date          :datetime         not null
#  seats         :integer          not null
#  time          :datetime         not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  restaurant_id :bigint           not null
#  user_id       :bigint           not null
#
# Indexes
#
#  index_reservations_on_restaurant_id              (restaurant_id)
#  index_reservations_on_user_id_and_restaurant_id  (user_id,restaurant_id) UNIQUE
#

class Reservation < ApplicationRecord
    validates :date, :time, :seats, presence: true
    belongs_to :user
    belongs_to :restaurant
end
