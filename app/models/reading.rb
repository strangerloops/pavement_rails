class Reading < ActiveRecord::Base
	def packet
		{
			start_location: "[#{start_lat},#{start_lon}]",
			end_location: "[#{end_lat},#{end_lon}]",
			roughness: get_roughness
		}
	end

	def get_roughness
		standard_deviation accel_as_array
	end

	def accel_as_array
		acceleration[2..-1].split.map { |val| val.to_f }
	end

	def has_accel?
		!acceleration.empty?
	end

	def sum numbers
    return self.inject(0){|accum, i| accum + i }
  end

	def mean numbers
  	sum(numbers) / numbers.length.to_f
	end

	def sample_variance numbers
	  m = mean numbers
	  sum = numbers.inject(0) {|accum, i| accum +(i-m)**2 }
	  sum/(numbers.length - 1).to_f
	end

	def standard_deviation numbers
	  return Math.sqrt(sample_variance(numbers))
	end
end
