Rails.application.routes.draw do
  
  get 'static_pages/home'

  get 'static_pages/map'

  get 'static_pages/contribute'

  get 'static_pages/contact'

  get 'map/home'

  resources :readings, :rides

end
