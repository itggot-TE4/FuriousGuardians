class Server < Sinatra::Base
    get '/' do
        slim :index
      
    end

    get '/users/:user/repos' do
        user = params["user"]
        ApiHandler.get_repos(user).to_json
    end

    get '/repos/:user/:repo/forks' do
        user = params["user"]
        repo = params["repo"]
        ApiHandler.get_forks(user, repo).to_json
    end

    get '/repos/:user/:repo/contents/.manifest.json' do
        user = params["user"]
        repo = params["repo"]
        ApiHandler.get_manifest(user, repo).to_json
    end

    get '/repos/:user/:repo/contents/:file' do
        user = params["user"]
        repo = params["repo"]
        file = params["file"]
        ApiHandler.get_repo_content(user, repo, "#{file}")
    end

    get '/repos/:user/:repo/contents/:file/:path' do
        user = params["user"]
        repo = params["repo"]
        file = params["file"]
        path = params["path"]

        ApiHandler.get_repo_content(user, repo, "#{file}/#{path}")
    end




  end