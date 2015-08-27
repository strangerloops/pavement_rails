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
		params.require(:reading).permit(:start_lat, :end_lat, :start_lon, :end_lon, :acceleration)
	end
end
