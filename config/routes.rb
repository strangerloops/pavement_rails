Rails.application.routes.draw do
  
  get 'map/home'

  resources :readings

end
