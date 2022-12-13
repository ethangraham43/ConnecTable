class AddReviewsColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :num_reviews, :string
  end
end
