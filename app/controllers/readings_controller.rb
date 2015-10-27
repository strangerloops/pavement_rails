class ReadingsController < ApplicationController
	include StatisticsHelper

	def create
		@reading = Reading.new(reading_params)
		@reading.mean_g = @reading.get_mean_roughness
		respond_to do |format|
			if @reading.save
				format.json { render :json => @reading.to_json, :status => :created, :location => @reading }
			else
				format.json { render :json => @reading.errors, :status => :unprocessable_entity }
			end
		end
	end

	def show
		@reading = Reading.find(params[:id])
		respond_to do |format|
			format.json { render :json => @reading.to_json }
		end
	end

	def export_to_json
		target = File.join(Rails.root, 'cache', 'readings.txt')
		@readings = File.open(target, 'r')
  	send_data @readings.to_json, :type => 'text/xml; charset=UTF-8;', :disposition => "attachment; filename=readings.json"
	end

	protected
	def reading_params
		params.require(:reading).permit(:start_time, :end_time, :start_lat, :start_lon, :end_lat, :end_lon, :ride_id, :acceleration_x, :acceleration_y, :acceleration_z, :angle_x, :angle_y, :angle_z).tap do |whitelisted|
    	whitelisted[:acceleration_x] = params[:reading][:acceleration_x]
    	whitelisted[:acceleration_y] = params[:reading][:acceleration_y]
    	whitelisted[:acceleration_z] = params[:reading][:acceleration_z]
    end
  end
end
