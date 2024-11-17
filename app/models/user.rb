class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :reviews, dependent: :destroy

  belongs_to :company, optional: true

  USER_ROLES={
    "user": 0,
    "admin": 1,
    "recruiter": 2
  }
end
