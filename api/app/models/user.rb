# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :tweets

  has_many :follower_relationships, class_name: "Relationship", foreign_key: :follower_id
  has_many :followings, through: :follower_relationships, source: :followed

  has_many :followed_relationships, class_name: "Relationship", foreign_key: :followed_id
  has_many :followers, through: :followed_relationships, source: :follower

  # 返却するカラム絞り込み
  def attributes
    {"id": nil, "name": nil, "nickname": nil, "profile": nil }
  end
end
