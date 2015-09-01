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

	def adjusted_mean_packet
		{
			start_location: [start_lat,start_lon],
			end_location: [end_lat,end_lon],
			roughness: mean_roughness_adjusted_for_speed
			# speed: get_speed
		}
	end

	def get_sd_roughness
		standard_deviation accel_as_array
	end

	def get_mean_roughness
		mean accel_as_array.map(&:magnitude)
	end

	def mean_roughness_adjusted_for_speed
		# speed: 5.3 to 8.7
		# rough: 0.4 to 0.9
		# speed went up by 64%
		# rough went up by 125%
		# roughness grows by twice as much as speed
		# speed doubles -> roughness will quadruple
		# suppose 4 is the baseline
		# if im going 8, im doubling baseline speed, roughness will be ~4 times higher, i have to divide roughness by 2x the change in speed (???)
		# seems p drastic gonna stick with an arbitrary like 1.5 here
		if speed > 4.0 then (get_mean_roughness / (2 * (speed / 4.0))) else get_mean_roughness end
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
