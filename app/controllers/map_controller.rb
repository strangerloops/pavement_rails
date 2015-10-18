class MapController < ApplicationController
  include MapHelper

  def all_rides
    @packets = Ride.all.map do |ride|
      sd_packets_for ride
    end.reduce(&:+)
    render :map
  end

  def last_ride
    @packets = sd_packets_for Ride.last
    render :map
  end

  def one_ride
  	@packets = sd_packets_for Ride.find(params[:id])
    render :map
  end

  def all_standard_deviation
    @packets = Ride.all.map do |ride|
      sd_packets_for ride
    end.reduce(&:+)
    render :map
  end
end
