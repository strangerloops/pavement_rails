class Ride < ActiveRecord::Base
	# has_one :calibration, :class_name => 'Ride', :foreign_key => 'id'
	def calibration
		Ride.find(calibration_id)
	end
end
