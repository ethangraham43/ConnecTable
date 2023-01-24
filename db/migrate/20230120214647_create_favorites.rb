class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.bigint :user_id, null: false
      t.bigint :restaurant_id, null: false

      t.timestamps
    end
    add_index :favorites, :user_id
    add_index :favorites, :restaurant_id
    add_index :favorites, [:user_id, :restaurant_id], unique: true
  end
end
