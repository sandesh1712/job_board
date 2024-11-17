module Users::ControllerConcerns
  extend ActiveSupport::Concern

  included do
    before_action :configure_sign_up_params, only: [:create]
  end
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [ :first_name, :last_name, :company_id ])
    devise_parameter_sanitizer.permit(:edit, keys: [ :first_name, :last_name, :company_id ])
  end
end