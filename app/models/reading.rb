class Reading < ActiveRecord::Base
	include StatisticsHelper

	belongs_to :ride

	def sd_packet
		{
			start_location: [start_lat,start_lon],
			end_location: [end_lat,end_lon],
			roughness: get_sd_roughness
			# speed: get_speed
		}
	end

	def mean_packet
		{
			start_location: [start_lat,start_lon],
			end_location: [end_lat,end_lon],
			roughness: get_mean_roughness
			# speed: get_speed
		}
	end

	def get_sd_roughness
		standard_deviation accel_as_array
	end

	def get_mean_roughness
		mean accel_as_array.map(&:magnitude)
	end

	def accel_as_array
		acceleration.split.map(&:to_f)
	end

	def has_accel?
		!acceleration.empty?
	end

	def speed # avg speed over this segment
		# distance = time * speed
		# speed = distance / time
		GeoDistance.default_algorithm = :haversine
  	distance = GeoDistance.distance(start_lat, start_lon, end_lat, end_lon).meters.number
  	time = end_time - start_time
  	distance / time
	end
end
