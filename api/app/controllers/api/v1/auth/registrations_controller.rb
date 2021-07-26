module Api
  module V1
    module Auth
      # devise_token_authgemであらかじめ用意されている認証用のコントローラーを、作成したregistrations_controllerに継承しています。
      # 継承元
      # https://github.com/heartcombo/devise/blob/master/app/controllers/devise/registrations_controller.rb
      class RegistrationsController < DeviseTokenAuth::RegistrationsController
        private
        def sign_up_params
          params.permit(:name, :nickname, :email, :img, :password, :password_confirmation)
        end

        def account_update_params
          params.permit(:nickname, :profile)
        end

        def show_all_users
          user = User.all()
          render json: { data: user }
        end
      end
    end
  end
end
