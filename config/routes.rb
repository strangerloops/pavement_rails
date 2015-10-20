Rails.application.routes.draw do

	get '/' => 'static_pages#home'
  get '/contact' => 'static_pages#contact'
  get '/contribute' => 'static_pages#contribute'
  
  get '/dump' => 'readings#export_to_json'
  
  get 'static_pages/home'
  get 'static_pages/contribute'
  get 'static_pages/contact'

  get '/map' => 'map#all_sd'
  get '/map/sd' => 'map#all_sd'
  get '/map/mean' => 'map#all_mean'

  get 'map/last' => 'map#last_ride'
  get 'map/ride/:id' => 'map#one_ride'

  resources :readings, :rides
end
