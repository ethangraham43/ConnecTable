class ChangeNumReviewsAgain < ActiveRecord::Migration[7.0]
  def change
    remove_column :restaurants, :num_reviews, :bigint
    add_column :restaurants, :num_reviews, :integer
  end
end
