class MapController < ApplicationController
  include MapHelper

  def all_rides

    @packets = Ride.all.map do |ride|
      packets_for_ride ride
    end
    render :map
  	# @packets = Reading.all.select do |reading|
  	# 	reading.has_accel?
  	# end.map do |reading|
  	# 	reading.packet
  	# end
  end

  def last_ride
    @packets = packets_for_ride Ride.last
    render :map

  	# @packets = Ride.last.readings do |reading|
  	# 	reading.has_accel?
  	# end.map do |reading|
  	# 	reading.packet
  	# end
  end

  def one_ride
  	@packets = packets_for_ride Ride.find(params[:id])
    render :map
  end
end
