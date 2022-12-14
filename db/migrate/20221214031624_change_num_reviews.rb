class ChangeNumReviews < ActiveRecord::Migration[7.0]
  def change
    remove_column :restaurants, :num_reviews, :string
    add_column :restaurants, :num_reviews, :bigint
  end
end
