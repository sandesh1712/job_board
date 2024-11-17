class AddOptionsToJobQuestion < ActiveRecord::Migration[7.2]
  def change
    add_column :job_questions, :options, :text, null: true
  end
end
