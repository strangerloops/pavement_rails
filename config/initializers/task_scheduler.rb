keep_alive_scheduler = Rufus::Scheduler.new
zip_scheduler = Rufus::Scheduler.new

seconds_per_day = 60 * 60 * 24
day = "#{seconds_per_day}s"
five_seconds = "5s"

keep_alive_scheduler.every five_seconds, :first_in => 0.1 do
	# ping '/'
end

zip_scheduler.every day, :first_in => 0.1 do
	# zip it all up
	readings = Reading.all.to_json
	target = File.join(Rails.root, 'app', 'cache', 'readings.json')
	File.open(target, 'w+') do |f|
		f.write readings
	end
end