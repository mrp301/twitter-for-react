Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
end

Rails.application.routes.draw do
  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
          registrations: 'api/v1/auth/registrations'
      }
    end
  end
end