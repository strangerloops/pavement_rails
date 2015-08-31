class AddAttributesToRides < ActiveRecord::Migration
  def change
  	add_column :rides, :start_time, :float
  	add_column :rides, :end_time, :float
  end
end
