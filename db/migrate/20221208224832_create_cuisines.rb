class CreateCuisines < ActiveRecord::Migration[7.0]
  def change
    create_table :cuisines do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
