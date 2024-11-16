class CompanyController < ApplicationController
  before_action :set_company, only: [:detail,:reviews]

  def list
    @companies = Company.all
  end

  def detail
  end

  def reviews
    render json , @company.reviews
  end

  private
  def set_company
    @company = Company.find(params[:id])
  end
end
