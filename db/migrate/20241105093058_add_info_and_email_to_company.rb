class AddInfoAndEmailToCompany < ActiveRecord::Migration[7.2]
  def change
    add_column :companies , :info , :text
    add_column :companies , :email ,:string
  end
end
