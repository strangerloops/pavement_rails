class AddRideIdToReadings < ActiveRecord::Migration
  def change
  	add_column :readings, :ride_id, :integer
  end
end
