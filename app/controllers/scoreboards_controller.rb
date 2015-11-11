class ScoreboardsController < ApplicationController

	def rank
		render plain: ((Scoreboard.where(description: 'global').first.index(params[:id]) || -1) + 1)
	end
end
