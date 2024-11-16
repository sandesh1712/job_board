class JobQuestion < ApplicationRecord
  belongs_to :job, foreign_key: "job_id" ,optional: true
end
