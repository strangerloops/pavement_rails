class ScoreboardsController < ApplicationController

	def rank
		render plain: ((Scoreboard.where(description: 'global').first.rankings.index(params[:id]) || -1) + 1)
	end
end
