class RemoveTweetFromUserId < ActiveRecord::Migration[5.2]
  def change
    remove_column :tweets, :user_id
  end
end
