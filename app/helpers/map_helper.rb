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

	def adjusted_mean_packets_for ride
		(readings_for ride).map do |reading|
  		reading.adjusted_mean_packet
  	end
	end

	def readings_for ride
		Reading.where(ride_id: ride.id)
	end

	def mean_packets_with_speed_for ride
		(readings_for ride).map do |reading|
  		reading.mean_packet_plus_speed
  	end
	end

end
