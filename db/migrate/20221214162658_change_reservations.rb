class ChangeReservations < ActiveRecord::Migration[7.0]
  def change
    remove_index :reservations, :user_id
    change_column :reservations, :restaurant_id, :bigint, unique: false
    
    add_index :reservations, [:user_id, :restaurant_id], unique: true
  end
end
