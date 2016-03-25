class AddSnappedCoordsToReadings < ActiveRecord::Migration
  def change
    add_column :readings, :snapped_start_lat, :float
    add_column :readings, :snapped_start_lon, :float
    add_column :readings, :snapped_end_lat, :float
    add_column :readings, :snapped_end_lon, :float
  end
end
