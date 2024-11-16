class JobController < ApplicationController
  def show
  end

  def new
    @job = Job.new
  end

  def create
    @job = Job.new(job_params)

    @job.status = "active"

    if @job.save
      render :new, notice: { type: "success", msg: "Job successfully created" }
    else
      render :new, notice: { type: "error", msg: "Error Occurred" }
    end
  end

  private
  def job_params
    params.require(:job).permit :title, :description, job_questions_attributes: [:question, :field_type]
  end
end
