require 'spec_helper'

describe Reading do
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
    it "has a ride id" do
      reading = Reading.new
      reading.valid?
      expect(reading.errors.messages[:ride_id].length).to eq 2
    end

    it "has a numeric ride id" do
      reading = Reading.new(:ride_id => 'jinga la la')
      reading.valid?
      expect(reading.errors.messages[:ride_id].length).to eq 1
    end

    it "has a unique ride id" do
      reading1 = Reading.create(@valid_attributes)
      reading2 = Reading.new(:ride_id => reading1.ride_id)
      reading2.valid?
      expect(reading2.errors.messages[:ride_id].length).to eq 1
    end

  end

  describe "logic" do
    it "does not divide by zero" do
      reading = Reading.new(@valid_attributes.merge(:start_time => 0, :end_time => 0))
      expect(reading.speed).to eq 0
    end
  end
end

# == Schema Information
#
# Table name: readings
#
#  id           :integer          not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  start_lat    :float
#  start_lon    :float
#  end_lat      :float
#  end_lon      :float
#  acceleration :string
#  ride_id      :integer
#  start_time   :float
#  end_time     :float
#
