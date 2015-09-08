require 'spec_helper'
include MapHelper

describe Ride do
  before(:each) do
    @valid_attributes = {
    }

    @reading_attributes = {
       :start_lat => 1,
       :start_lon => 1,
       :end_lat => 1,
       :end_lon => 1,
       :acceleration => "4",
       :start_time => Time.now,
       :end_time => Time.now
    }
  end

  describe "validation" do
    it "returns nil for a missing calibration" do
      ride = Ride.new
      expect(ride.calibration).to eq nil
    end
  end

  describe "logic" do
    # it "returns mean packets when there are multiple readings" do
    #   ride = Ride.create @valid_attributes
    #   ride.readings << Reading.create!(@reading_attributes.merge(:ride_id => ride.id))
    #   ride.reload
    #   expect(sd_packets_for ride).to eq 1
    # end
  end
end

# == Schema Information
#
# Table name: rides
#
#  id             :integer          not null, primary key
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  start_time     :float
#  end_time       :float
#  calibration_id :integer
#
