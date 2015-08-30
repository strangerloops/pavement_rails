class MapController < ApplicationController
  include MapHelper

  def all_rides
    home(Ride.all.map do |ride|
      packets_for_ride ride
    end)

  	# @packets = Reading.all.select do |reading|
  	# 	reading.has_accel?
  	# end.map do |reading|
  	# 	reading.packet
  	# end
  end

  def last_ride

    home([Ride.last].map do |ride|
      packets_for_ride ride
    end)

  	# @packets = Ride.last.readings do |reading|
  	# 	reading.has_accel?
  	# end.map do |reading|
  	# 	reading.packet
  	# end
  end

  def one_ride
    home([Ride.find(params[:id])].map do |ride|
      packets_for_ride ride
    end)
  end

  def home packets
    @packets
  end
end
