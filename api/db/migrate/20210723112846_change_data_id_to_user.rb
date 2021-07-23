class ChangeDataIdToUser < ActiveRecord::Migration[5.2]
  def change
    change_column :tweets, :id, :bigint
  end
end
