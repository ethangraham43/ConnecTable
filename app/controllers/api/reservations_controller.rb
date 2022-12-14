class Api::ReservationsController < ApplicationController
    wrap_parameters include: Reservation.attribute_names + [:userId, :restaurantId]
    before_action :require_logged_in

    def index
        # @reservations = Reservation.all
        if current_user 
            @reservations = current_user.reservations
        else
            render json: ["User not found"], status: 404
        end
    end

    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    private
    def reservation_params
        params.require(:reservation).permit(:user_id, :restaurant_id, :date, :time, :seats)
    end
end
