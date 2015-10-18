class Ride < ActiveRecord::Base
	has_many :readings, dependent: :destroy
end
