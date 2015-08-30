class MapController < ApplicationController

  def all_rides

    @packets = Ride.all.map do |ride|
      packets_for_ride ride
    end

  	# @packets = Reading.all.select do |reading|
  	# 	reading.has_accel?
  	# end.map do |reading|
  	# 	reading.packet
  	# end
  end

  def last_ride
    @packets = Ride.last.map do |ride|
      packets_for_ride ride
    end

  	# @packets = Ride.last.readings do |reading|
  	# 	reading.has_accel?
  	# end.map do |reading|
  	# 	reading.packet
  	# end
  end

  def packets_for_ride
  	@packets = Ride.find(params[:id]).readings do |reading|
  		reading.has_accel?
  	end.map do |reading|
  		reading.packet
  	end
  end

end
