class AddProfilesToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile, :string
  end
end
