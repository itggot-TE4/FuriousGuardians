class Server < Sinatra::Base
    get '/' do
        slim :index
      
    end

    get '/users/:user/repos' do
        user = params["user"]
        begin
            ApiHandler.get_repos(user).to_json
        rescue
            nil.to_json
        end
    end

    get '/repos/:user/:repo/forks' do
        user = params["user"]
        repo = params["repo"]
        begin
            ApiHandler.get_forks(user, repo).to_json
        rescue
            nil.to_json
        end
    end

    get '/repos/:user/:repo/contents/.manifest.json' do
        user = params["user"]
        repo = params["repo"]
        begin
            ApiHandler.get_manifest(user, repo).to_json
        rescue
            nil.to_json
        end
    end
    

    get '/repos/:user/:repo/contents/*' do
        protocol = params[:splat].first
        address = params[:splat][1..-1].join('/')
        url = protocol + "//" + address
      
        user = params["user"]
        repo = params["repo"]
        begin
            ApiHandler.get_repo_content(user, repo, "#{url}").to_json
        rescue
            nil.to_json
        end
    end
    # get %r{/repos/:user/:repo/contents/(.+)} do
    #     user = params["user"]
    #     repo = params["repo"]
    #     url = params[:captures]
        
    #     ApiHandler.get_repo_content(user, repo, "#{url}")
    #   end

    # get '/repos/:user/:repo/contents/:file' do
    #     user = params["user"]
    #     repo = params["repo"]
    #     file = params["file"]
    #     ApiHandler.get_repo_content(user, repo, "#{file}")
    # end

    # get '/repos/:user/:repo/contents/:file/:path' do
    #     user = params["user"]
    #     repo = params["repo"]
    #     file = params["file"]
    #     path = params["path"]

    #     ApiHandler.get_repo_content(user, repo, "#{file}/#{path}")
    # end




  end