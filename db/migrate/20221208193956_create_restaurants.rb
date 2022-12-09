class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name,  null: false
      t.string :address, null: false
      t.string :price_range, null: false
      t.string :phone_number, null: false, unique: true
      t.datetime :open_time, null: false
      t.datetime :close_time, null: false
      t.text :description
      t.float :avg_rating, null: false

      t.timestamps
    end
    add_index :restaurants, :name, unique: true
    add_index :restaurants, :address, unique: true
    add_index :restaurants, :phone_number, unique: true

  end
end
