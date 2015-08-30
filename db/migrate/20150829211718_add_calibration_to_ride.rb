class AddCalibrationToRide < ActiveRecord::Migration
  def change
  	add_column :rides, :ride_id, :integer
  end
end
