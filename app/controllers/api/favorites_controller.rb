class Api:FavoritesController < ApplicationController
   before_action :require_logged_in
   def index
    @favorite_restaurants = current_user.favorite_restaurants
  end

  def create
    @restaurant = Restaurant.find(params[:restaurant_id])
    current_user.favorite_restaurants << @restaurant
    if current_user.save
      redirect_to favorites_path, notice: "Restaurant added to favorites."
    else
      redirect_to restaurants_path, alert: "Failed to add restaurant to favorites."
    end
  end

  def destroy
    @restaurant = Restaurant.find(params[:restaurant_id])
    current_user.favorite_restaurants.delete(@restaurant)
    if current_user.save
      redirect_to favorites_path, notice: "Restaurant removed from favorites."
    else
      redirect_to favorites_path, alert: "Failed to remove restaurant from favorites."
    end
  end
end