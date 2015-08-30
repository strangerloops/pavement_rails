class AddCalibrationToRide < ActiveRecord::Migration
  def change
  	add_column :rides, :calibration_id, :integer
  end
end
