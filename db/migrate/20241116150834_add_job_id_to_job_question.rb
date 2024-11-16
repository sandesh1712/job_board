class AddJobIdToJobQuestion < ActiveRecord::Migration[7.2]
  def change
    add_column :job_questions, :job_id, :integer
    add_index :job_questions, :job_id # Optional but recommended for performance
  end
end
