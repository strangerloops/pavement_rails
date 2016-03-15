class MapController < ApplicationController
  include GeographyHelper

  # def all_mean
  #   @packets = File.read(File.join(Rails.root, 'cache/mean_packets.txt'))
  #   render :map
  # end

  def last_ride
    readings = Ride.last.readings
    @packets = readings.map do |reading|
      reading.mean_packet
    end.to_json
    @coords = midpoint(readings.first.start_lat, readings.first.start_lon, readings.last.end_lat, readings.last.end_lon)
    @zoom = 18
    render :map
  end

  def one_ride
    readings = Ride.find(params[:id]).readings
    @packets = readings.map do |reading|
      reading.mean_packet
    end.to_json
    @coords = midpoint(readings.first.start_lat, readings.first.start_lon, readings.last.end_lat, readings.last.end_lon)
    @zoom = 18
    render :map
  end

  def all_new_york
    @packets = File.read(File.join(Rails.root, 'cache/nyc.txt'))
    @osrm_endpoint = nyc_osrm
    @coords = nyc_center
    @other_coords = nyc_point
    @zoom = 12
    render :map
  end

  def all_chicago
    @packets = File.read(File.join(Rails.root, 'cache/chicago.txt'))
    @osrm_endpoint = chi_osrm
    @coords = chi_center
    @other_coords = chi_point
    @zoom = 12
    render :map
  end

  def user_rides
    readings = Ride.find_by_scoreboard_id(params[:id])
    @packets = readings.map(&:mean_packet).to_json
    @coords = midpoint(readings.first.start_lat, readings.first.start_lon, readings.last.end_lat, readings.last.end_lon)
    @zoom = 15
    render :map
  end
end
