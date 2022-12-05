class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy]
  before_action :require_logged_out, only: [:create]

  def show
      @user = current_user

      if @user
          render 'api/users/show'
      else
          render json: { user: nil }
      end
  end

  def create
      email = params[:email]
      first_name = params[:first_name]
      last_name = params[:last_name]
      phone_number = params[:phone_number]
      @user = User.find_by_credentials(email, first_name, last_name, phone_number)

      if @user
          login!(@user)
          render 'api/users/show'
      else
          render json: { errors: ['Invalid Credentials'] }, status: 422
      end
  end

  def destroy
      logout!
      head :no_content
  end
end

