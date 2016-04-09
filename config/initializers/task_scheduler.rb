require 'net/http'
include GeographyHelper

keep_alive_scheduler = Rufus::Scheduler.new
daily_scheduler = Rufus::Scheduler.new

day = "#{60 * 60 * 24}s"
four_minutes = "#{4 * 60}s"

keep_alive_scheduler.every four_minutes, :first_in => 1.0 do
  p 'stayin alive'
  p Time.now.inspect
end

daily_scheduler.every day, :first_in => 12.0 do

	p 'caching chicago...'
	cache_chicago
	p 'done with chicago.'

	p 'caching new york...'
	cache_nyc
	p 'done with chicago.'

	p 'caching scoreboard...'
	cache_scoreboard
	p 'done with scoreboard.'
end

def cache_chicago
  packets = []
  Reading.find_each do |reading|
    if in_chicago? reading.start_lat, reading.start_lon
      packets << reading.mean_packet
    end
  end
  File.open(File.join(Rails.root, 'cache', 'chicago.txt'), 'w+') do |f|
    f.write packets.to_json
  end
end

def cache_nyc
  packets = []
  Reading.find_each do |reading|
    if in_nyc? reading.start_lat, reading.start_lon
      packets << reading.mean_packet
    end
  end
  File.open(File.join(Rails.root, 'cache', 'nyc.txt'), 'w+') do |f|
    f.write packets.to_json
  end
end

def cache_scoreboard
	rankings = Ride.pluck(:scoreboard_id).uniq.sort do |i, j|
			(Ride.where(scoreboard_id: i).map do |r|
	 			r.distance_meters
	 		end.reduce(&:+)) <=> (Ride.where(scoreboard_id: j).map do |r|
				r.distance_meters
			end.reduce(&:+))
		end.reverse

	scoreboard = Scoreboard.where(description: 'global').first || Scoreboard.new(description: 'global')
	scoreboard.rankings = rankings
	scoreboard.save
end
