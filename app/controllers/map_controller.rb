class MapController < ApplicationController
  
  def all_mean
    @packets = File.read(File.join(Rails.root, 'cache/mean_packets.txt'))
    render :map
  end

  def last_ride
    @packets = Ride.last.readings.map do |reading|
      reading.mean_packet
    end.to_json
    render :map
  end

  def one_ride
  	@packets = Ride.find(params[:id]).readings.map do |reading|
      reading.mean_packet
    end.to_json
    render :map
  end

  def all_new_york
    @packets = Reading.all.select do |reading|
      reading.nyc?
    end.map do |reading|
      reading.mean_packet
    end.to_json
    render :map
  end
end
