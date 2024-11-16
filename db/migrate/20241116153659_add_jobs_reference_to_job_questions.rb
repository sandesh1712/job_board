class AddJobsReferenceToJobQuestions < ActiveRecord::Migration[7.2]
  def change
    remove_column :job_questions, :job_id, :integer
    add_reference :job_questions, :job, foreign_key: true
  end
end
