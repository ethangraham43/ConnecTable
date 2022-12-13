class ChangeRestaurantsThree < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :cuisine, :string
  end
end
