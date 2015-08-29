class AddCalibrationToRide < ActiveRecord::Migration
  def change
  	add_column :rides, :calibration, :float
  end
end
