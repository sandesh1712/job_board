class CreateJobQuestions < ActiveRecord::Migration[7.2]
  def change
    create_table :job_questions do |t|
      t.string :question
      t.text :type

      t.timestamps
    end
  end
end
