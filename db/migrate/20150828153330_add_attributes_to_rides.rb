class AddAttributesToRides < ActiveRecord::Migration
  def change
  	add_column :rides, :start_time, :string
  	add_column :rides, :end_time, :string
  end
end
