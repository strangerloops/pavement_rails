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
    @zoom = 20
    render :map
  end

  def one_ride
    readings = Ride.find(params[:id]).readings
  	@packets = readings.map do |reading|
      reading.mean_packet
    end.to_json
    @coords = midpoint(readings.first.start_lat, readings.first.start_lon, readings.last.end_lat, readings.last.end_lon)
    @zoom = 20
    render :map
  end

  def all_new_york
    @packets = Reading.all.select do |reading|
      reading.nyc?
    end.map do |reading|
      reading.mean_packet
    end.to_json
    @coords = nyc_center
    @zoom = 15
    render :map
  end

  def all_chicago
    @packets = Reading.all.select do |reading|
      reading.chicago?
    end.map do |reading|
      reading.mean_packet
    end.to_json
    @coords = chi_center
    @zoom = 15
    render :map
  end
end
