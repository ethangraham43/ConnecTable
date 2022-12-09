class RestaurantsController < ApplicationController
    # def index

    # end

    def show
        @restaurant = Restaurant.find(params[:id])
    end

    private
    def restaurant_params
        params.require(:restaurant).permit(:name, :address, :price_range, :phone_number, :open_time, :close_time, :avg_rating)
    end
end
