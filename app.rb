class Server < Sinatra::Base
    get '/' do
        slim :index
      
    end




  end