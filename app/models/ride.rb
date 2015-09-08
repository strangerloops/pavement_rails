class Ride < ActiveRecord::Base
	has_many :readings

	# has_one :calibration, :class_name => 'Ride', :foreign_key => 'id'
	def calibration
		Ride.find_by(:calibration_id => calibration_id)
	end
end

# == Schema Information
#
# Table name: rides
#
#  id             :integer          not null, primary key
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  start_time     :float
#  end_time       :float
#  calibration_id :integer
#
