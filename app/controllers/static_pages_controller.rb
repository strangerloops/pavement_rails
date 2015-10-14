class StaticPagesController < ApplicationController
  def home
  end

  def contribute
  end

  def contact
  end

  def dump
  	render json: Reading.all.to_json
  end
end
