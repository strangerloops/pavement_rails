module MapHelper
	def sd_packets_for ride
		Reading.where(ride_id: ride.id).select do |reading|
  		reading.has_accel?
  	end.map do |reading|
  		reading.sd_packet
  	end
	end

	def mean_packets_for ride
		Reading.where(ride_id: ride.id).select do |reading|
  		reading.has_accel?
  	end.map do |reading|
  		reading.mean_packet
  	end
	end
end
