class Job < ApplicationRecord
  has_many :job_questions, dependent: :destroy

  accepts_nested_attributes_for :job_questions, allow_destroy: true, update_only: true
end
