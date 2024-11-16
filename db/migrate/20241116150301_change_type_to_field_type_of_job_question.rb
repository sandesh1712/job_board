class ChangeTypeToFieldTypeOfJobQuestion < ActiveRecord::Migration[7.2]
  def change
    change_column :job_questions, :type, :string
    rename_column :job_questions, :type, :field_type
  end
end
