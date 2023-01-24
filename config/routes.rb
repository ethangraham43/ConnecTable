Rails.application.routes.draw do
  get 'static_pages/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :restaurants, only: [:show, :index]
    resources :reservations, only: [:index, :create, :update, :destroy, :show]
  end
  get '*path', to: "static_pages#frontend_index"
end


