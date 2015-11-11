class AddAttributesToScoreboards < ActiveRecord::Migration
  def change
  	add_column :scoreboards, :rankings,    :string
  	add_column :scoreboards, :description, :string
  end
end
