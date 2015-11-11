class Scoreboard < ActiveRecord::Base
	serialize :rankings

	def initialize(description)
		self.description = description
	end
end
