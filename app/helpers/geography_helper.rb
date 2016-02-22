module GeographyHelper

	def in_nyc? lat, lon
		point_in_bounding_box? lat, lon, nyc_bounding_box
	end

	def in_chicago?(lat, lon)
		point_in_bounding_box? lat, lon, chicago_bounding_box
	end

	def point_in_bounding_box? lat, lon, bounding_box
		lat < bounding_box[:max_lat] &&
		lat > bounding_box[:min_lat] &&
		lon < bounding_box[:max_lon] &&
		lon > bounding_box[:min_lon]
	end

	def midpoint lat1, lon1, lat2, lon2
		[(lat1 + lat2) / 2, (lon1 + lon2) / 2]
	end

	def nyc_bounding_box
		{
			max_lat: 40.915256,
			min_lat: 40.491370,
			max_lon: -73.700272,
			min_lon: -74.259090
		}
	end

	def nyc_center
		[40.693817467738924, -73.92976999282837]
	end

	def chi_center
		 [41.840675, -87.679365]
	end

	def chi_point
		[41.9271, -87.7042]
	end

	def nyc_point
		[40.723035, -73.91]
	end

	def chi_osrm
		"http://162.243.23.60/osrm-chi-vanilla/viaroute"
	end

	def nyc_osrm
		"http://162.243.23.60/osrm-nyc-vanilla/viaroute"
	end

	def chicago_bounding_box
		{
			max_lat: 42.07436,
			min_lat: 41.624851,
			max_lon: -87.397217,
			min_lon: -87.968437
		}
	end
end