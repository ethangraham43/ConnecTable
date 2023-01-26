class Api::FavoritesController < ApplicationController
    before_action :require_logged_in
    
    def index
      @favorite_restaurants = current_user.favorite_restaurants
      render json: @favorite_restaurants
    end
    
    def create
      @restaurant = Restaurant.find(favorite_params[:restaurant_id])
      # check if user has already favorited restaurant
      if current_user.favorite_restaurants.include?(@restaurant)
        # destroy existing favorite
        current_user.favorite_restaurants.delete(@restaurant)
        render json: { status: 'success', message: 'Restaurant removed from favorites.' }
      else
        # create new favorite
        current_user.favorite_restaurants << @restaurant
        if current_user.save
          render json: { status: 'success', message: 'Restaurant added to favorites.' }
        else
          render json: { status: 'error', message: 'Failed to add restaurant to favorites.' }
        end
      end
    end
    
    
    def destroy
        @restaurant = Restaurant.find(favorite_params[:restaurant_id])
        current_user.favorite_restaurants.delete(@restaurant)
      if current_user.save
        render json: { message: "Restaurant removed from favorites." }
      else
        render json: { message: "Failed to remove restaurant from favorites." }, status: :unprocessable_entity
      end
    end
    
    private
    
    def favorite_params
      params.require(:favorite).permit(:restaurant_id, :user_id)
    end
  end