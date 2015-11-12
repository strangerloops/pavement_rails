class RenameDeviceIdCalibration < ActiveRecord::Migration
  def change
  	rename_column :rides, :device_id, :calibration_id
  end
end
