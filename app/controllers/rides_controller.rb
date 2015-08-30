class RidesController < ApplicationController

	def create
		if ride_params['calibration_id'].empty? then ride_params['calibration_id'] = ride_params['id'] end
		@ride = Ride.new(ride_params)
		respond_to do |format|
			if @ride.save
				format.json { render :json => @ride.to_json, :status => :created, :location => @ride }
			else
				format.json { render :json => @ride.errors, :status => :unprocessable_entity }
			end
		end
	end

	def update
		@ride = Ride.find(params[:id])
		respond_to do |format|
			if @ride.update_attributes(ride_params)
				format.json { head :ok }
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
		params.require(:ride).permit(:start_time, :end_time, :calibration_id)
	end

end
