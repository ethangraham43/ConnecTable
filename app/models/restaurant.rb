# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  address      :string           not null
#  avg_rating   :float            not null
#  close_time   :datetime         not null
#  description  :text
#  name         :string           not null
#  open_time    :datetime         not null
#  phone_number :string           not null
#  price_range  :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_restaurants_on_address       (address) UNIQUE
#  index_restaurants_on_name          (name) UNIQUE
#  index_restaurants_on_phone_number  (phone_number) UNIQUE
#
class Restaurant < ApplicationRecord
    has_many_attached :photos
end