class AddStartAndEndTimesToReadings < ActiveRecord::Migration
  def change
  	add_column :readings, :start_time, :string
  	add_column :readings, :end_time, :string
  end
end
