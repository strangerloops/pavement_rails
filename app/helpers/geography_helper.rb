module GeographyHelper

	def in_nyc?(lat, lon)
		lat < nyc_bounding_box[:max_lat] &&
		lat > nyc_bounding_box[:min_lat] &&
		lon < nyc_bounding_box[:max_lon] &&
		lon > nyc_bounding_box[:min_lon]
	end

	def in_chicago?(lat, lon)
		lat < chicago_bounding_box[:max_lat] &&
		lat > chicago_bounding_box[:min_lat] &&
		lon < chicago_bounding_box[:max_lon] &&
		lon > chicago_bounding_box[:min_lon]
	end

	def nyc_bounding_box
		{
			max_lat: 40.915256,
			min_lat: 40.491370,
			max_lon: -73.700272,
			min_lon: -74.259090
		}
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