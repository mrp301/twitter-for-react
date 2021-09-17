Rails.application.routes.draw do
  resources :users do
    member do
      get :current_user
      get :following_users
      get :followed_users
    end
  end
  # /users/relationships
  resource :relationships, only: [:create, :destroy]
  resources :tweets do
    member do
      get :mytweet # /tweets/:id/mytweet
    end
  end
  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }
    end
  end
end

