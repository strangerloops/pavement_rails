Rails.application.routes.draw do

	get '/' => 'static_pages#home'
  get '/contact' => 'static_pages#contact'
  get '/contribute' => 'static_pages#contribute'
  get '/map' => 'map#all_standard_deviation'
  get '/dump' => 'static_pages#dump'
  
  get 'static_pages/home'
  get 'static_pages/contribute'
  get 'static_pages/contact'

  get 'map/last' => 'map#last_ride'
  get 'map/ride/:id' => 'map#one_ride'

  resources :readings, :rides
end
