Rails.application.routes.draw do

  # static pages
	get '/' => 'static_pages#home'
  get '/contact' => 'static_pages#contact'
  get '/support' => 'static_pages#contact'
  get '/contribute' => 'static_pages#contribute'
  get '/dump' => 'static_pages#dump'

  # map
  # get '/map' => 'map#all_mean'
  get 'map/last' => 'map#last_ride'
  get 'map/ride/:id' => 'map#one_ride'
  get 'map/nyc' => 'map#all_new_york'
  get 'map/chi' => 'map#all_chicago'

  # scoreboards
  get '/scoreboards/rank/:id' => 'scoreboards#global_rank'

  # trim
  post '/rides/:id/trim' => 'rides#trim'

  resources :readings, :rides
end
