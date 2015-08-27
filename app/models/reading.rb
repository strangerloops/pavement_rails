class Reading < ActiveRecord::Base
	def packet
		[time.split[0..1].reduce { |a,b| a << 'T' << b } << 'Z']
	end
end
