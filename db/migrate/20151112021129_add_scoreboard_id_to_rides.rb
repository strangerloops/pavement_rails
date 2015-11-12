class AddScoreboardIdToRides < ActiveRecord::Migration
  def change
  	add_column :rides, :scoreboard_id, :integer
  end
end
