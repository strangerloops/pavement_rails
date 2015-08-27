class MapController < ApplicationController
  def home
  	@packets = Readings.all.select do |reading|
  		reading.has_accel?
  	end.map do |reading|
  		reading.packet
  	end
  end
end
