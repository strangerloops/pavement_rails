class Ride < ActiveRecord::Base
	has_many :readings, dependent: :destroy

	def trim
		upper_bound = readings.count / 10
		front = readings[0..rand(upper_bound)]
		back = readings[(readings.count - rand(upper_bound))..-1]
		(front + back).each do |reading|
			reading.destroy
		end
	end
end
