class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t.string :user_id
      t.string :string
      t.text :content

      t.timestamps
    end
  end
end
