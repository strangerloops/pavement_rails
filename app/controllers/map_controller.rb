class MapController < ApplicationController
  include MapHelper

  def all_rides
    @packets = Ride.all.map do |ride|
      packets_for_ride ride
    end.reduce(&:+)
    render :map
  end

  def last_ride
    @packets = packets_for_ride Ride.last
    render :map
  end

  def one_ride
  	@packets = packets_for_ride Ride.find(params[:id])
    render :map
  end
end
