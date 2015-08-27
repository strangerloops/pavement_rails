class Reading < ActiveRecord::Base
	def packet
		[start_lon]
	end
end
