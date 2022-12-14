class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.bigint :user_id, null: false
      t.bigint :restaurant_id, null: false
      t.datetime :date, null: false
      t.datetime :time, null: false
      t.integer :seats, null: false
      t.timestamps
    end
    add_index :reservations, :user_id, unique: true
    add_index :reservations, :restaurant_id, unique: true

  end
end
