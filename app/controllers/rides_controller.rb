class RidesController < ApplicationController

	def create
		@ride = Ride.new(ride_params)
		respond_to do |format|
			if @ride.save
				format.json { render :json => @ride.to_json, :status => :created, :location => @ride }
			else
				format.json { render :json => @ride.errors, :status => :unprocessable_entity }
			end
		end
	end

	def show
		@ride = Ride.find(params[:id])
		respond_to do |format|
			format.json { render :json => @ride.to_json }
		end
	end

	protected
	def ride_params
		params.require(:ride).permit(:start_lat, :end_lat, :start_lon, :end_lon, :acceleration)
	end

end
