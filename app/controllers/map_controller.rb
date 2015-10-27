class MapController < ApplicationController
  include MapHelper

  def all_sd
    @packets = Ride.all.map do |ride|
      sd_packets_for ride
    end.reduce(&:+)
    render :map
  end

  def all_mean
    @packets = Ride.all.map do |ride|
      ride.readings.map do |reading|
        reading.mean_g
      end
    end.reduce(&:+)
    render :map
  end

  def last_ride
    @packets = mean_packets_for Ride.last
    render :map
  end

  def one_ride
  	@packets = mean_packets_for Ride.find(params[:id])
    render :map
  end
end
