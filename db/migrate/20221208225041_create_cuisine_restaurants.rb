class CreateCuisineRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :cuisine_restaurants do |t|
      t.integer :cuisine_id, null: false
      t.integer :restaurant_id, null: false

      t.timestamps
    end

  end
end
