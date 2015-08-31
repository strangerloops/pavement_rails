module MapHelper
	def packets_for ride
		Reading.where(ride_id: ride.id).select do |reading|
  		reading.has_accel?
  	end.map do |reading|
  		reading.packet
  	end
	end
end
