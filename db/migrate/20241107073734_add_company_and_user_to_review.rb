class AddCompanyAndUserToReview < ActiveRecord::Migration[7.2]
  def change
    add_reference :reviews, :user, null: false, foreign_key: true
    add_reference :reviews, :company, null: false, foreign_key: true
  end
end
