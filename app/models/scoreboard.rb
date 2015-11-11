class Scoreboard < ActiveRecord::Base
	serialize :rankings

	def initialize(description)
		this.description = description
	end
end
