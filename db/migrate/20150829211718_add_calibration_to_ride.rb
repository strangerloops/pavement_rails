class AddCalibrationToRide < ActiveRecord::Migration
  def change
  	add_column :rides, :device_id, :integer
  end
end
