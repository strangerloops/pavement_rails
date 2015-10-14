class AddAttributesToReading < ActiveRecord::Migration
  def change
  	add_column :readings, :start_lat, :float
  	add_column :readings, :start_lon, :float
  	add_column :readings, :end_lat, :float
  	add_column :readings, :end_lon, :float
  	add_column :readings, :acceleration_x, :string
  	add_column :readings, :acceleration_y, :string
  	add_column :readings, :acceleration_z, :string
  	add_column :readings, :acceleration_g, :string
  end
end
