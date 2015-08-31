class AddStartAndEndTimesToReadings < ActiveRecord::Migration
  def change
  	add_column :readings, :start_time, :float
  	add_column :readings, :end_time, :float
  end
end
