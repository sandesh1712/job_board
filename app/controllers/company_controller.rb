class CompanyController < ApplicationController
  before_action :set_company, only: [:detail, :api_company_reviews]

  def list
    @companies = Company.all
  end

  def api_list_autocomplete
    query = params[:autocomplete]

    if query.present?
      @companies = Company.where("name LIKE ?","#{query}%").select(:id, :name).limit(5)
      render json: @companies
    else
      render json: []
    end
  end
  def detail
  end

  def api_company_reviews
    render json: @company.reviews
  end

  private
  def set_company
    @company = Company.find(params[:id])
  end
end
