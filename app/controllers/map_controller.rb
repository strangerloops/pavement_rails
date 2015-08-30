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
    @packets = [Ride.last].map do |ride|
      packets_for_ride ride
    end
    render :map

  	# @packets = Ride.last.readings do |reading|
  	# 	reading.has_accel?
  	# end.map do |reading|
  	# 	reading.packet
  	# end
  end

  def one_ride
  	@packets = [Ride.find(params[:id])].map do |ride|
      packets_for_ride ride
    end
    render :map
  end
end
