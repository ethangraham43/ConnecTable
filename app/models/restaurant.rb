# == Schema Information
#
# Table name: restaurants
#
#  id           :bigint           not null, primary key
#  address      :string           not null
#  avg_rating   :float            not null
#  close_time   :string
#  cuisine      :string
#  description  :text
#  name         :string           not null
#  num_reviews  :integer
#  open_time    :string
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
    has_one_attached :photo
    validates :name, :address, :phone_number, presence: true, uniqueness: true
    validates :avg_rating, :open_time, :close_time, :price_range, presence: true
    
    has_many :reservations
    has_many :favorites
    has_many :favorited_by, through: :favorites, source: :user
end
