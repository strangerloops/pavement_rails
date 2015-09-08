require 'spec_helper'
include StatisticsHelper

describe StatisticsHelper do
  describe "logic" do
    it "knows how to count" do
      expect(StatisticsHelper::sum([1,2,3])).to eq 6
    end

    it "returns nil when given an empty set" do
      expect(StatisticsHelper::sum([])).to eq nil
    end

    it "returns nil when given an empty set" do
      expect(StatisticsHelper::mean([])).to eq nil
    end

    it "does not crash when given a single element" do
      expect(StatisticsHelper::sample_variance([0])).to eq nil
    end

  end
end
