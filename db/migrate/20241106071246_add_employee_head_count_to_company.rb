class AddEmployeeHeadCountToCompany < ActiveRecord::Migration[7.2]
  def change
    add_column :companies, :employee_head_count, :integer
  end
end
