class Api::ReservationsController < ApplicationController
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
