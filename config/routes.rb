Rails.application.routes.draw do

	get '/' => 'static_pages#home'
  get '/contact' => 'static_pages#contact'
  
  get 'static_pages/home'
  get 'static_pages/contribute'
  get 'static_pages/contact'

  get 'map/all' => 'map#all_rides'
  get 'map/last' => 'map#last_ride'
  get 'map/ride/:id' => 'map#one_ride'

  get 'map/all-mean' => 'map#all_rides_mean'
  get 'map/ride-mean/:id' => 'map#one_ride_mean'

  get 'map/all-adjusted' => 'map#all_rides_adjusted_mean'
  get 'map/ride-adjusted/:id' => 'map#one_ride_adjusted_mean'
  get 'map/last-adjusted' => 'map#last_ride_adjusted_mean'

  resources :readings, :rides

end
