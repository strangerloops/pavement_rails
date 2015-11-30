class Ride < ActiveRecord::Base
	has_many :readings, dependent: :destroy

	def trim
		sorted_readings = readings.sort { |i, j| i.start_time <=> j.start_time }
		if sorted_readings.count == 0
			self.destroy
		else
			upper_bound = sorted_readings.count / 10
			front = sorted_readings[0..rand(upper_bound)]
			back = sorted_readings[(sorted_readings.count - rand(upper_bound))..-1]
			(front + back).each do |reading|
				reading.destroy
			end
		end
	end

	def distance_meters
		readings.map { |reading| reading.distance_meters }.reduce(:+)
	end
end
