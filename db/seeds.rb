# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

5.times do |index|
  Company.create!(
    name: "company #{index}",
    city: "Denver",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    email: "abcd#{index}@xyz.com",
    thumbnail_url: "https://placehold.jp/150x150.png",
    profile_image: "https://placehold.jp/450x450.png",
    employee_head_count: index+1*10
  )
end

5.times do |index|
  Review.create!(
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    user_id: 1,
    company_id: 1,
  )
end