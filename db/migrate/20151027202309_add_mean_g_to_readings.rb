class AddMeanGToReadings < ActiveRecord::Migration
  def change
  	add_column :readings, :mean_g, :float
  end
end
