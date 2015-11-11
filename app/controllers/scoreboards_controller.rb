class ScoreboardsController < ApplicationController

	def rank
		render json: {rank: ((Scoreboard.where(description: 'global').first.rankings.index(params[:id].to_i) || -1) + 1)}.to_json
	end
end
