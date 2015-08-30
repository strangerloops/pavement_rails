module MapHelper
	def packets_for_ride ride
		ride.readings.select do |reading|
  		reading.has_accel?
  	end.map do |reading|
  		reading.packet
  	end
	end
end
