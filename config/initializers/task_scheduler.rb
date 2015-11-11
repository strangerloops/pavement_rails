require 'net/http'

keep_alive_scheduler = Rufus::Scheduler.new
daily_scheduler = Rufus::Scheduler.new

day = "#{60 * 60 * 24}s"
four_minutes = "#{4 * 60}s"

keep_alive_scheduler.every four_minutes, :first_in => 1.0 do
  p 'stayin alive'
  p Time.now.inspect
end

daily_scheduler.every day, :first_in => 12.0 do

	p 'caching readings...'
	cache_readings
	p 'done with readings.'

	p 'caching mean packets...'
	cache_mean_packets
	p 'done with packets.'

	p 'caching scoreboard...'
	cache_scoreboard
	p 'done with scoreboard.'
end

def cache_readings
	readings = Reading.all.to_json
	File.open(File.join(Rails.root, 'cache', 'readings.txt'), 'w+') do |f|
		f.write readings
	end
end

def cache_mean_packets
	packets = Reading.all.map do |r| r.mean_packet end.to_json
	File.open(File.join(Rails.root, 'cache', 'mean_packets.txt'), 'w+') do |f|
		f.write packets
	end
end

def cache_scoreboard
	rankings = Ride.pluck(:device_id).uniq.sort do |i, j|
			(Ride.where(device_id: i).map do |r|
	 			r.distance_meters
	 		end.reduce(&:+)) <=> (Ride.where(device_id: j).map do |r|
				r.distance_meters
			end.reduce(&:+))
		end.reverse

	scoreboard = Scoreboard.where(description: 'global').first || Scoreboard.new('global')
	scoreboard.rankings = rankings
	scoreboard.save
end











