require 'descriptive-statistics'

class Reading < ActiveRecord::Base
	def packet
		{
			start_location: "[#{start_lat},#{start_lon}]",
			end_location: "[#{end_lat},#{end_lon}]"
			roughness: get_roughness
		}
	end

	def get_roughness
		accel_as_array.standard_deviation
	end

	def accel_as_array
		acceleration[2..-1].split.map { |val| val.to_f }
	end

	def has_accel?
		acceleration.empty?
	end
end
