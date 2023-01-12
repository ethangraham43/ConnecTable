class Api::RestaurantsController < ApplicationController
    wrap_parameters include: Restaurant.attribute_names
    def index
        @restaurants = Restaurant.all
        render :index
    end

    def show
        @restaurant = Restaurant.find_by(id: params[:id])
        if @restaurant
            render :show
        else
            render json: { error: 'Restaurant not found' }, status: 404
        end
    end

    private
    def restaurant_params
        params.require(:restaurant).permit(:name, :address, :price_range, :phone_number, :open_time, :close_time, :avg_rating, :description, :cuisine, :num_reviews, :file)
    end
end
