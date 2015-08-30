class ReadingsController < ApplicationController

	def create
		@reading = Reading.new(reading_params)
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

	protected
	def reading_params
		params.require(:reading).permit(:start_time, :end_time, :start_lat, :start_lon, :end_lat, :end_lon, :ride_id, :acceleration)
	end
end
