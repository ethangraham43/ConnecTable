class RemoveUniqueOnReservations < ActiveRecord::Migration[7.0]
  def change
    remove_index :reservations, :restaurant_id

    add_index :reservations, :restaurant_id, unique: false
  end
end
