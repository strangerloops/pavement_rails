class StaticPagesController < ApplicationController
  def home
  end

  def contribute
  end

  def contact
  end

  def dump
  	render plain: File.read(File.join(Rails.root, 'cache/readings.txt')
  end
end
