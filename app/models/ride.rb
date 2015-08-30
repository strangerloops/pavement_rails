class Ride < ActiveRecord::Base
	has_one :calibration, :class_name => 'Ride', :foreign_key => 'calibration_id'
end
