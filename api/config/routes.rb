Rails.application.routes.draw do
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

