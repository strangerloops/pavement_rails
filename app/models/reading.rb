class Reading < ActiveRecord::Base
	include StatisticsHelper

	belongs_to :ride
	serialize :acceleration_x
	serialize :acceleration_y
	serialize :acceleration_z

	def acceleration_g
		acceleration_x.each_with_index.map do |x, index|
			y = acceleration_y[index]
			z = acceleration_z[index]
			(Math.cos(angle_x) * x) + (Math.cos(angle_y) * y) + (Math.cos(angle_z) * z)
		end
	end

	def sd_packet
		{
			start_location: [start_lat,start_lon],
			end_location: [end_lat,end_lon],
			roughness: get_sd_roughness
		}
	end

	def mean_packet
		{
			start_location: [start_lat,start_lon],
			end_location: [end_lat,end_lon],
			roughness: get_mean_roughness
		}
	end

	def get_sd_roughness
		standard_deviation acceleration_g
	end

	def get_mean_roughness
		mean(acceleration_g.map do |g| g.abs - 1.0 end)
	end

	def distance_meters
		GeoDistance.default_algorithm = :haversine
  	GeoDistance.distance(start_lat, start_lon, end_lat, end_lon).meters.number
	end

	def speed # meters per second # wait isnt this milliseconds
  	time = end_time - start_time
  	distance_meters / time
	end
end
