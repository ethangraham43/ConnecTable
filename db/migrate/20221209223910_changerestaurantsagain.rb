class Changerestaurantsagain < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :open_time, :string
    add_column :restaurants, :close_time, :string
  end
end
