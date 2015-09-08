require 'spec_helper'

describe Ride do
  before(:each) do
    @valid_attributes = {
        :start_time => Time.now,
        :end_time => Time.now,
        :start_lat => 1.0,
        :start_lon => 1.0,
        :end_lat => 2.0,
        :end_lon => 2.0,
        :ride_id => 1,
        :acceleration => 1
    }
  end

  describe "validation" do
    it "returns nil for a missing calibration" do
      ride = Ride.new
      expect(ride.calibration).to eq nil
    end
  end

  describe "logic" do
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
