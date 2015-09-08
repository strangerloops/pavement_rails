module StatisticsHelper

	def sum numbers
    numbers.reduce(&:+)
  end

	def mean numbers
		sum = sum(numbers)
    return nil if !sum
    sum / numbers.length.to_f
	end

	def sample_variance numbers
    return nil if numbers.length == 1
	  m = mean numbers
	  sum = numbers.inject(0) {|accum, i| accum +(i-m)**2 }
	  sum / (numbers.length - 1).to_f
	end

	def standard_deviation numbers
	  Math.sqrt(sample_variance(numbers))
	end

	def square number
		number * number
	end
end
