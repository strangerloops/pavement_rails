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

  def all_rides_mean
    @packets = Ride.all.map do |ride|
      mean_packets_for ride
    end.reduce(&:+)
    render :map
  end

  def one_ride_mean
    @packets = mean_packets_for Ride.find(params[:id])
    render :map
  end

  def all_rides_adjusted_mean
    @packets = Ride.all.map do |ride|
      adjusted_mean_packets_for ride
    end.reduce(&:+)
    render :map
  end

  def one_ride_adjusted_mean
    @packets = adjusted_mean_packets_for Ride.find(params[:id])
    render :map
  end

  def last_ride_adjusted_mean
    @packets = adjusted_mean_packets_for Ride.last
    render :map
  end

  def all_standard_deviation
    @packets = Ride.all.map do |ride|
      sd_packets_for ride
    end.reduce(&:+)
    render :map
  end

  def all_packets
    @packets = Ride.all.map do |ride|
      mean_packets_with_speed_for ride
    end.reduce(&:+)
    render :text => @packets.to_json.html_safe
  end

  def one_speed_packet
    @packets = mean_packets_with_speed_for Ride.find(params[:id])
    render :text => @packets.to_json.html_safe
  end
end
