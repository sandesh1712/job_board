class Company < ApplicationRecord
  has_many :reviews
  has_many :users
end
