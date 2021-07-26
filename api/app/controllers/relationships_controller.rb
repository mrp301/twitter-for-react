class RelationshipsController < ApplicationController
  def create
    name = params[:user_id]
    follow_user_id = params[:follow_user_id]

    @new_follow = Relationship.new({ follower_id: name, followed_id: follow_user_id })

    if @new_follow.save
      render json: { data: "フォロー成功" }
    else
      render json: @new_follow.errors, status: :unprocessable_entity
    end

  end

  def destroy
    follow = current_user.followed_relationships.find_by(follower_id: user_id)
    follow.destroy
    render json: { data: "フォロー解除成功" }
  end

  #/relationships/:id/followers
  def followers
    user_id = params[:id]

    follow_users = Relationship
    .joins(:follower)
    .where(users: { name: user_id })
    .order(id: :asc)
    .select("followed_id")

    pp "============"
    pp json: { data: user }
    pp "============"

    user = Relationship
      .joins(:follower)
      .where(users: { name: user_id })
      .order(id: :asc)
      .select("users.id, users.name, users.nickname, users.profile")

    render json: { data: user }
  end
end
