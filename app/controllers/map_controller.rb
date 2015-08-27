class MapController < ApplicationController
  def home

  	@accels = Reading.all.map do |reading|
  		reading.acceleration
  	end.reject do |accel|
  		accel.empty?
  	end.map do |non_empty_accel|
  		non_empty_accel[2..-1].split.map do |val|
  			val.to_f
  		end
  	end
  end
end
