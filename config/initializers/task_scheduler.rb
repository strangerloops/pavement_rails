keep_alive_scheduler = Rufus::Scheduler.new
zip_scheduler = Rufus::Scheduler.new

seconds_per_day = 60 * 60 * 24
day = "#{seconds_per_day}s"
five_seconds = "5s"

keep_alive_scheduler.every five_seconds, :first_in => 0.1 do
	# ping '/'
end

zip_scheduler.every day, :first_in => 160.0 do
	# zip it all up
	p 'writing cache...'
	readings = Reading.all.to_json
	File.open(File.join(Rails.root, 'cache', 'readings.txt'), 'w+') do |f|
		f.write readings
	end
	p 'all done.'
end