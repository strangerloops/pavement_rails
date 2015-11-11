class Scoreboard < ActiveRecord::Base
	serialize :rankings

	def initialize(description)
		@description = description
	end
end
