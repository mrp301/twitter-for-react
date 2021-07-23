class ChangeDataIdToTweet < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :id, :bigint
  end
end
