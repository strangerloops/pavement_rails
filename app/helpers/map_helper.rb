module MapHelper
	def sd_packets_for ride
		(readings_for ride).map do |reading|
  		reading.sd_packet
  	end
	end

	def mean_packets_for ride
		(readings_for ride).map do |reading|
  		reading.mean_packet
  	end
	end

	def readings_for ride
		Reading.where(ride_id: ride.id)
	end
end
