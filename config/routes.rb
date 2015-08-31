Rails.application.routes.draw do
  
  get 'static_pages/home'
  get 'static_pages/contribute'
  get 'static_pages/contact'

  get 'map/all' => 'map#all_rides'
  get 'map/last' => 'map#last_ride'
  get 'map/ride/:id' => 'map#one_ride'
  
  get 'map/all-mean' => 'map#all_rides_mean'

  resources :readings, :rides

end
