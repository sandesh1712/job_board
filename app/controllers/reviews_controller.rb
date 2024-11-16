class ReviewsController < ApplicationController

  protect_from_forgery with: :null_session
  def company_reviews
    @reviews = Review.includes(:user)
                     .where(company_id: params[:company_id]).limit(10).order(created_at: :desc)
    render json: @reviews.as_json(include:{user:{only:[:id,:first_name,:last_name]}})
  end

  def create
    review = Review.create! review_params

    if review.save
     render json: review ,status: :ok
    else
      render json: review.errors,status: :internal_server_error
    end
  end

  private
  def review_params
    params.permit(:review,:company_id, :user_id);
  end

end