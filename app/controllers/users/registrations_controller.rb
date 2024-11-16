# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  include Users::ControllerConcerns
end
