# https://qiita.com/kazukimatsumoto/items/14bdff681ec5ddac26d1
class UsersController < ApplicationController
  def index
    user = User.all().order(id: :asc)
    render json: { data: user }
  end

  def current_user
    name = params[:id]
    user = User.where(name: name)
    render json: { data: user }
  end

  def following_users
    name = params[:id]
    user = User.find_by(name: name)
    users = user.followings
    render json: { data: users }
  end

  def followed_users
    name = params[:id]
    user = User.find_by(name: name)
    users = user.followers
    render json: { data: users }
  end
end
