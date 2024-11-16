Rails.application.routes.draw do
  devise_for :users ,controllers: { registrations: 'users/registrations' }

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root to: "company#list"
  get "company/list" => "company#list"
  get "company/detail/:id" => "company#detail" , as: :company_detail

  get "reviews/company/:company_id" => "reviews#company_reviews" , as: :company_review
  post "reviews/create" => "reviews#create" , as: :create_review
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/*
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  # Defines the root path route ("/")
  # root "posts#index"

  get "jobs/new" => "job#new" , as: :new_job
  post "jobs/create" => "job#create" , as: :create_job
end
