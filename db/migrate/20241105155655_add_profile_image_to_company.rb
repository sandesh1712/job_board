class AddProfileImageToCompany < ActiveRecord::Migration[7.2]
  def change
    add_column :companies, :thumbnail_url, :string
    add_column :companies, :profile_image, :string
  end
end
