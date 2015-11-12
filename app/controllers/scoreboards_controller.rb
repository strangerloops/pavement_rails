class ScoreboardsController < ApplicationController

	def global_rank
		render json: { rank: ((Scoreboard.where(description: 'global').first.rankings.index(params[:id].to_i) || -1) + 1) }.to_json
	end
end
