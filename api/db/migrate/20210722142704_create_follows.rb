class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.bigint :user_id
      t.bigint :follow_user_id

      t.timestamps
    end
  end
end
