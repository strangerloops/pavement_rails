require 'net/http'

keep_alive_scheduler = Rufus::Scheduler.new
zip_scheduler = Rufus::Scheduler.new

day = "#{60 * 60 * 24}s"
four_minutes = "#{4 * 60}s"

keep_alive_scheduler.every four_minutes, :first_in => 0.1 do
  p 'stayin alive'
  p Time.now.inspect
end

zip_scheduler.every day, :first_in => 160.0 do
	
	p 'writing cache...'
	readings = Reading.all.to_json
	File.open(File.join(Rails.root, 'cache', 'readings.txt'), 'w+') do |f|
		f.write readings
	end
	p 'done with readings.'

	p 'writing mean packets...'
	packets = Reading.all.map do |r| r.mean_packet end
	File.open(File.join(Rails.root, 'cache', 'mean_packets.txt'), 'w+') do |f|
		f.write packets
	end
	p 'done with packets.'
	
end